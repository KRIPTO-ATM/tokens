pragma solidity ^0.4.18;

import "./IDcorpPersonalCrowdsaleProxy.sol";
import "../IDcorpCrowdsaleAdapter.sol";

/**
 * DcorpPersonalCrowdsaleProxy
 *
 * Proxy that allows collective contributions from DCORP members using 
 * a unique address
 * 
 * DCORP DAO VC & Promotion https://www.dcorp.it
 *
 * #created 22/11/2017
 * #author Frank Bonnet
 */
contract DcorpPersonalCrowdsaleProxy is IDcorpPersonalCrowdsaleProxy {

    address public member;
    IDcorpCrowdsaleAdapter public target;
    

    /**
     * Deploy proxy
     *
     * @param _member Owner of the proxy
     * @param _target Target crowdsale
     */
    function DcorpPersonalCrowdsaleProxy(address _member, address _target) public {
        target = IDcorpCrowdsaleAdapter(_target);
        member = _member;
    }


    /**
     * Receive contribution and forward to the target crowdsale
     * 
     * This function requires that msg.sender is not a contract. This is required because it's 
     * not possible for a contract to specify a gas amount when calling the (internal) send() 
     * function. Solidity imposes a maximum amount of gas (2300 gas at the time of writing)
     */
    function () public payable {
        target.contributeFor.value(msg.value)(member);
    }
}