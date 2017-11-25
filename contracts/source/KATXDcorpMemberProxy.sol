pragma solidity ^0.4.18;

import "../thirdparty/dcorp/source/proxy/DcorpCrowdsaleProxy.sol";

contract KATXDcorpMemberProxy is DcorpCrowdsaleProxy {
    function KATXDcorpMemberProxy() public DcorpCrowdsaleProxy() {}
}