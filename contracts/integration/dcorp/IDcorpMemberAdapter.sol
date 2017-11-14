pragma solidity ^0.4.18;

/**
 * IDcorpMemberAdapter
 *
 * Interface that allows contributions from DCORP members
 * 
 * DCORP DAO VC & Promotion https://www.dcorp.it
 *
 * #created 10/11/2017
 * #author Frank Bonnet
 */
interface IDcorpMemberAdapter {


    /**
     * Returns true if `_member` is allowed to contribute
     *
     * @param _member Account that is being validated
     * @return Wheter the DCORP is accepted or not
     */
    function isAcceptedDcorpMember(address _member) public view returns (bool);


    /**
     * Receive a contribution from a DCORP member
     *
     * @param _member Account that is contributing
     */
    function contributeForDcorpMember(address _member) public payable;
}
