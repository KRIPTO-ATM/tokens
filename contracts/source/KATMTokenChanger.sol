pragma solidity ^0.4.18;

import "./token/changer/TokenChanger.sol";
import "./token/observer/TokenObserver.sol";
import "./token/retriever/TokenRetriever.sol";
import "../infrastructure/ownership/TransferableOwnership.sol";
import "../infrastructure/authentication/IAuthenticator.sol";
import "../infrastructure/authentication/IAuthenticationManager.sol";

/**
 * ATM Token Changer
 *
 * This contract of this token changer will allow anyone with a current balance of ATM, 
 * to deposit it and in return receive KATX, or KATM.
 *
 * KATM maintaining the primary security functions of the KATM token as 
 * outlined within the whitepaper.
 *
 * KATX as indicated by its ‘X’ designation is the utility token for those who are under strict 
 * compliance within their country of residence, and does not entitle holders to profit sharing.
 *
 * #created 30/10/2017
 * #author Frank Bonnet
 */
contract KATMTokenChanger is TokenChanger, TokenObserver, TransferableOwnership, TokenRetriever, IAuthenticationManager {

    enum Stages {
        Deploying,
        Deployed
    }

    Stages public stage;

    // Authentication
    IAuthenticator private authenticator;
    bool private requireAuthentication;


    /**
     * Throw if at stage other than current stage
     * 
     * @param _stage expected stage to test for
     */
    modifier at_stage(Stages _stage) {
        require(stage == _stage);
        _;
    }


    /**
     * Throw if not authenticated
     * 
     * @param _account The account that is authenticated
     */
    modifier authenticate(address _account) {
        require(!requireAuthentication || authenticator.authenticate(_account));
        _;
    }


    /**
     * Construct Security - Utility token changer
     *
     * @param _security Ref to the Security token smart-contract
     * @param _utility Ref to the Utiltiy token smart-contract
     */
    function KATMTokenChanger(address _security, address _utility) public
        TokenChanger(_security, _utility, 8000, 500, 4, false, true) {
        stage = Stages.Deploying;
    }


    /**
     * Setup authentication
     *
     * @param _authenticator The address of the authenticator (whitelist)
     * @param _requireAuthentication Wether the crowdale requires contributors to be authenticated
     */
    function setupWhitelist(address _authenticator, bool _requireAuthentication) public only_owner at_stage(Stages.Deploying) {
        authenticator = IAuthenticator(_authenticator);
        requireAuthentication = _requireAuthentication;
    }


    /**
     * After calling the deploy function the crowdsale
     * rules become immutable 
     */
    function deploy() public only_owner at_stage(Stages.Deploying) {
        stage = Stages.Deployed;
    }


    /**
     * Returns true if authentication is enabled and false 
     * otherwise
     *
     * @return Whether the converter is currently authenticating or not
     */
    function isAuthenticating() public view returns (bool) {
        return requireAuthentication;
    }


    /**
     * Enable authentication
     */
    function enableAuthentication() public only_owner {
        requireAuthentication = true;
    }


    /**
     * Disable authentication
     */
    function disableAuthentication() public only_owner {
        requireAuthentication = false;
    }


    /**
     * Pause the token changer making the contract 
     * revert the transaction instead of converting 
     */
    function pause() public only_owner {
        super.pause();
    }


    /**
     * Resume the token changer making the contract 
     * convert tokens instead of reverting the transaction 
     */
    function resume() public only_owner {
        super.resume();
    }


    /**
     * Event handler that initializes the token conversion
     * 
     * Called by `_token` when a token amount is received on 
     * the address of this token changer
     *
     * @param _token The token contract that received the transaction
     * @param _from The account or contract that send the transaction
     * @param _value The value of tokens that where received
     */
    function onTokensReceived(address _token, address _from, uint _value) internal is_token(_token) authenticate(_from) {
        require(_token == msg.sender);
        
        // Convert tokens
        convert(_token, _from, _value);
    }


    /**
     * Failsafe mechanism
     * 
     * Allows the owner to retrieve tokens from the contract that 
     * might have been send there by accident
     *
     * @param _tokenContract The address of ERC20 compatible token
     */
    function retrieveTokens(address _tokenContract) public only_owner {
        super.retrieveTokens(_tokenContract);
    }


    /**
     * Prevents the accidental sending of ether
     */
    function () public payable {
        revert();
    }
}