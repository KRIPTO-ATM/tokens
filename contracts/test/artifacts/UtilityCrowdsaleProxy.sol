pragma solidity ^0.4.18;

import "../../source/KATXCrowdsale.sol";

contract UtilityCrowdsaleProxy is KATXCrowdsale {
    function UtilityCrowdsaleProxy() public KATXCrowdsale() {}
}