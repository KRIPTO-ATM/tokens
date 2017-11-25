pragma solidity ^0.4.18;

import "./crowdsale/Crowdsale.sol";
import "./token/retriever/TokenRetriever.sol";
import "../infrastructure/authentication/IAuthenticator.sol";
import "../infrastructure/authentication/IAuthenticationManager.sol";
import "../thirdparty/wings/source/IWingsAdapter.sol";

/**
 * KATMCrowdsale
 *
 * BitcoinATMs for Everyone
 *
 * With KriptoATM now everyone has access to Bitcoin, Ethereum, and a wide range of other cryptocurrencies. We let you 
 * bring crypto to new places - with our innovative new features, state-of-the-art technology and our simple-to-use approach.
 *
 * #created 10/11/2017
 * #author Frank Bonnet
 */
contract KATMCrowdsale is Crowdsale, TokenRetriever, IAuthenticationManager, IWingsAdapter {

    // Authentication
    IAuthenticator private authenticator;
    bool private requireAuthentication;


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
     * Allows the implementing contract to validate a 
     * contributing account
     *
     * @param _contributor Address that is being validated
     * @return Wheter the contributor is accepted or not
     */
    function isAcceptedContributor(address _contributor) internal view returns (bool) {
        return !requireAuthentication || authenticator.authenticate(_contributor);
    }


    /**
     * Returns true if `_member` is allowed to contribute
     *
     * @param _member Account that is being validated
     * @return Wheter the DCORP member is accepted or not
     */
    function isAcceptedDcorpMember(address _member) public view returns (bool) {
        return isAcceptedContributor(_member);
    }


    /**
     * Receive a contribution from a DCORP member
     *
     * @param _member Account that is contributing
     */
    function contributeForDcorpMember(address _member) public payable {
        _handleTransaction(_member, msg.value);
    }


    /**
     * Wings integration - Get the total raised amount of Ether
     *
     * Can only increased, means if you withdraw ETH from the wallet, should be not modified (you can use two fields 
     * to keep one with a total accumulated amount) amount of ETH in contract and totalCollected for total amount of ETH collected
     *
     * @return Total raised Ether amount
     */
    function totalCollected() public view returns (uint) {
        return raised;
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

        // Retrieve tokens from our token contract
        ITokenRetriever(token).retrieveTokens(_tokenContract);
    }
}