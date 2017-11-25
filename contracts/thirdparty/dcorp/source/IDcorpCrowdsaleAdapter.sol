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
     * Receive ether and issue tokens to the sender
     *
     * @return The accepted ether amount
     */
    function contribute() public payable returns (uint);


    /**
     * Receive ether and issue tokens to `_beneficiary`
     *
     * @param _beneficiary The account that receives the tokens
     * @return The accepted ether amount
     */
    function contributeFor(address _beneficiary) public payable returns (uint);


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
