// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract DinoTokenAlpha is ERC20, Ownable {

    uint256 public constant MAX_SUPPLY = 100;

    constructor(address initialOwner) ERC20("Dino B Token Alpha","DINOBA") Ownable(initialOwner) {
         _mint(msg.sender, MAX_SUPPLY); // 100 Dino tokens
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}