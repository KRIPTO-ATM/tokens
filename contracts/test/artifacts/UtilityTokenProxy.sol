pragma solidity ^0.4.18;

import "../../source/KATXToken.sol";

contract UtilityTokenProxy is KATXToken {
    function UtilityTokenProxy() public KATXToken() {}
}