// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Capped.sol"; 
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

/// @title OniCoin Contract
/// @author Truong Thinh
/// @notice Uses onpenzeppelin lib to create our contracts
/// @dev Interns Software Engineer
contract OniCoin is ERC20Detailed, ERC20Capped, Ownable {
    constructor()
        ERC20Detailed("Oni Coin", "OC", 4)
        ERC20Capped(10000000000)
        payable public {}
}
