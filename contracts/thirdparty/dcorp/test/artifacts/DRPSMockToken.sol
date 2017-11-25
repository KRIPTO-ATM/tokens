pragma solidity ^0.4.18;

import "../../../../test/mock/MockToken.sol";

contract DRPSMockToken is MockToken {
    function DRPSMockToken() public 
        MockToken("DCORP Utility", "DRPU", 8, false) {}
}