pragma solidity ^0.4.18;

import "../../source/KATMCrowdsale.sol";

contract SecurityCrowdsaleProxy is KATMCrowdsale {
    function SecurityCrowdsaleProxy() public KATMCrowdsale() {}
}