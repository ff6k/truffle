// SPDX-Liscense-Identifire: MIT

pragma solidity ^0.5.2;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Metadata.sol";

/// @title Condos contract
/// @author Truong Thinh - Interns Software Engineer
/// @notice Uses openzepplin to create our contracts: Non-fungible tokens
/// @dev The ERC721 Token contract
contract Condos is ERC721Metadata {
    /// @dev The Id parameter holds the ID value of the last/latest token issued by our contract.
    uint32 public Id;
    mapping(address => uint32) public MDTrack;
    constructor()
    ERC721Metadata("Condos Token", "CONDO")
    payable public {
        Id = 0;
    }
    /// @notice for creating NFTs
    /// @dev The method mints new non-fungible tokens to the receiver's address
    function createNFT(address receiver, string calldata metadata) external returns (uint32) {
        Id++;
        _mint(receiver, Id);
        _setTokenURI(Id, metadata);
        MDTrack[receiver] = Id;
        return Id;
    }
    /// @notice for transferring NFTs
    /// @dev The method transfers non-fungible tokens between the sender and the receiver address
    function transferNFT(address sender, address receiver, uint32 transId, string calldata metadata) external {
        _transferFrom(sender, receiver, transId);
        _setTokenURI(transId, metadata);
        delete MDTrack[sender];
        MDTrack[receiver] = Id;
    }
}