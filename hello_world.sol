contract mortal {
    /* Define variable owner of type address */
    address owner;

    /* this function is executed at initialization and sets the owner of the contract */
    function mortal() { owner = msg.sender; }

    /* Function to recover the funds on the contract */
    function kill() { if (msg.sender == owner) selfdestruct(owner); }
}

contract greeter is mortal {
    /* define variable greeting of the type string */
    string greeting;

    /* this runs whe nthe contract is executed */
    function greeter(string _greeting) public {
        greeting = _greeting;
    }

    /* main function */
    function greet() constant returns (string) {
        return greeting;
    }
}


/* The inherited characteristic "mortal" simply means that the greeter contract can be killed by its owner, to clean up the blockchain and recover funds locked into it when the contract is no longer needed. Contracts in ethereum are, by default, immortal and have no owner, meaning that once deployed the author has no special privileges anymore. Consider this before deploying. */
