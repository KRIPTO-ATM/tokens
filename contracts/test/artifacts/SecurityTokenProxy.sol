pragma solidity ^0.4.18;

import "../../source/KATMToken.sol";

contract SecurityTokenProxy is KATMToken {
    function SecurityTokenProxy() public KATMToken() {}
}