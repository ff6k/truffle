// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol"; 
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/// @title OniCoin Contract
/// @author Truong Thinh - Interns Software Engineer
/// @notice Uses onpenzeppelin lib to create our contracts: fungible tokens
/** @dev ERC20Detailed and ERC20Capped are sample contracts
    that allow us to encapsulate the inner workings of the ERC20 token.
    Ownable is a sample contract that allows us to implement access controls on the smart contract.
*/
contract OniCoin is ERC20Detailed, ERC20Capped, Ownable {
    constructor()
        ERC20Detailed("Oni Coin", "OC", 4)
        ERC20Capped(10000000000)
        payable public {}
}
