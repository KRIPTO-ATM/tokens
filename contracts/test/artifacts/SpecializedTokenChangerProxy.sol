pragma solidity ^0.4.18;

import "../../source/KATMTokenChanger.sol";

contract SpecializedTokenChangerProxy is KATMTokenChanger {
    function SpecializedTokenChangerProxy(address _security, address _utility) public 
        KATMTokenChanger(_security, _utility) {}
}