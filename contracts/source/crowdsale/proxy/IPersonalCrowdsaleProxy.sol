pragma solidity ^0.4.18;

/**
 * IPersonalCrowdsaleProxy
 *
 * #created 22/11/2017
 * #author Frank Bonnet
 */
interface IPersonalCrowdsaleProxy {

    /**
     * Receive ether and issue tokens
     * 
     * This function requires that msg.sender is not a contract. This is required because it's 
     * not possible for a contract to specify a gas amount when calling the (internal) send() 
     * function. Solidity imposes a maximum amount of gas (2300 gas at the time of writing)
     * 
     * Contracts can call the contribute() function instead
     */
    function () public payable;
}
