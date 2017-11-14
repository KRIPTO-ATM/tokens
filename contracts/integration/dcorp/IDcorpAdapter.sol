pragma solidity ^0.4.18;

/**
 * IDcorpAdapter
 *
 * Interface that allows collective contributions from DCORP members
 * 
 * DCORP DAO VC & Promotion https://www.dcorp.it
 *
 * #created 10/11/2017
 * #author Frank Bonnet
 */
interface IDcorpAdapter {

    /**
     * Receive a contribution from DCORP 
     */
    function contributeForDcorp() public payable;


    /**
     * Returns the allocated Ether balance of DCORP 
     */
    function getEthBalanceOfDcorp() public view returns (uint);


    /**
     * Withdraws the allocated Ether balance of DCORP 
     */
    function withdrawEthBalanceOfDcorp() public;


    /**
     * Returns the allocated Token balance of DCORP
     */
    function getTokenBalanceOfDcorp() public view returns (uint);

    
    /**
     * Withdraws the allocated Token balance of DCORP 
     */
    function withdrawTokenBalanceOfDcorp() public;
}
