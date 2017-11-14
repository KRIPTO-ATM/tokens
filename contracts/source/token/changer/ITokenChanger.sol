pragma solidity ^0.4.18;

/**
 * ITokenChanger
 *
 * Basic token changer public interface 
 *
 * #created 06/10/2017
 * #author Frank Bonnet
 */
interface ITokenChanger {


    /**
     * Returns true if '_token' is on of the tokens that are 
     * managed by this token changer
     * 
     * @param _token The address being tested
     * @return Whether the '_token' is part of this token changer
     */
    function isToken(address _token) public view returns (bool);


    /**
     * Returns the address of the left token
     *
     * @return Left token address
     */
    function getLeftToken() public view returns (address);


    /**
     * Returns the address of the right token
     *
     * @return Right token address
     */
    function getRightToken() public view returns (address);


    /**
     * Returns the fee that is paid in tokens when using 
     * the token changer
     *
     * @return The percentage of tokens that is charged
     */
    function getFee() public view returns (uint);

    
    /**
     * Returns the rate that is used to change between tokens
     *
     * @return The rate used when changing tokens
     */
    function getRate() public view returns (uint);


    /**
     * Returns the precision of the rate and fee params
     *
     * @return The amount of decimals used
     */
    function getPrecision() public view returns (uint);


    /**
     * Calculates and returns the fee based on `_value` of tokens
     *
     * @return The actual fee
     */
    function calculateFee(uint _value) public view returns (uint);
}