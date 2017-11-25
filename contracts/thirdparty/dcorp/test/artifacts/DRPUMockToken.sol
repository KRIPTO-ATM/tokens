pragma solidity ^0.4.18;

import "../../../../test/mock/MockToken.sol";

contract DRPUMockToken is MockToken {
    function DRPUMockToken() public 
        MockToken("DCORP Utility", "DRPU", 8, false) {}
}