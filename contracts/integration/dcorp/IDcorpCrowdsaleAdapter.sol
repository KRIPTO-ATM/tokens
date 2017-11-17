pragma solidity ^0.4.18;

/**
 * IDcorpCrowdsaleAdapter
 *
 * Interface that allows collective contributions from DCORP members
 * 
 * DCORP DAO VC & Promotion https://www.dcorp.it
 *
 * #created 10/11/2017
 * #author Frank Bonnet
 */
interface IDcorpCrowdsaleAdapter {

    /**
     * Receive Eth and issue tokens to the sender
     */
    function isEnded() public view returns (bool);


    /** 
     * Get the allocated token balance of `_owner`
     * 
     * @param _owner The address from which the allocated token balance will be retrieved
     * @return The allocated token balance
     */
    function balanceOf(address _owner) public view returns (uint);


    /**
     * Receive Eth and issue tokens to the sender
     */
    function contribute() public payable;


    /**
     * Receive Eth and issue tokens to `_beneficiary`
     */
    function contributeFor(address _beneficiary) public payable;


    /**
     * Withdraw allocated tokens
     */
    function withdrawTokens() public;


    /**
     * Withdraw allocated ether
     */
    function withdrawEther() public;


    /**
     * Refund in the case of an unsuccessful crowdsale. The 
     * crowdsale is considered unsuccessful if minAmount was 
     * not raised before end of the crowdsale
     */
    function refund() public;
}
