pragma solidity ^0.4.18;

import "./token/changer/TokenChanger.sol";
import "./token/observer/TokenObserver.sol";
import "./token/retriever/TokenRetriever.sol";
import "../infrastructure/ownership/TransferableOwnership.sol";

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
contract KATMTokenChanger is TokenChanger, TokenObserver, TransferableOwnership, TokenRetriever {


    /**
     * Construct Security - Utility token changer
     *
     * @param _security Ref to the Security token smart-contract
     * @param _utility Ref to the Utiltiy token smart-contract
     */
    function KATMTokenChanger(address _security, address _utility) public
        TokenChanger(_security, _utility, 8000, 500, 4, false, true) {}


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
    function onTokensReceived(address _token, address _from, uint _value) internal is_token(_token) {
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