let cardInserted = prompt("Please insert your card by typing 'yes'");
let pin = "1111";
let balance = 100000;
let receiverDetailsConfirmed = false;
let receiverBank;

function withdraw(amount) {
  if (amount > balance) {
    alert("Insufficient funds");
  } else {
    balance -= amount;
    alert(`Withdrawal successful. Your new balance is ${balance}`);
  }
}

function transfer(receiverAccountNumber, receiverBankName, amount) {
  if (!receiverDetailsConfirmed) {
    alert("Please confirm receiver details first");
    // Remove the return statement here
  }
  
  // Check if receiver bank is valid
  if (receiverBankName.toLowerCase() !== "access" && receiverBankName.toLowerCase() !== "uba" &&
      receiverBankName.toLowerCase() !== "union" && receiverBankName.toLowerCase() !== "gtbank" &&
      receiverBankName.toLowerCase() !== "firstbank") {
    alert("Invalid receiver bank");
    // Remove the return statement here
  }
  
  // Perform transfer
  balance -= amount;
  alert(`Transfer successful. Your new balance is ${balance}`);
}

if (cardInserted.toLowerCase() === "yes") {
  let inputPin = prompt("Please enter your pin");

  if (inputPin === pin) {
    let action = prompt("Type 1 to withdraw\nType 2 to transfer");

    switch(action) {
      case "1":
        let withdrawAmount = prompt("Enter withdrawal amount");
        withdraw(parseInt(withdrawAmount));
        break;
      case "2":
        let receiverAccountNumber = prompt("Please enter receiver account number");
        receiverBank = prompt("Please select receiver bank:\n1. Access Bank\n2. UBA Bank\n3. Union Bank\n4. Gtbank\n5. First Bank");
        
        switch (receiverBank) {
          case "1":
            receiverBank = "Access";
            break;
          case "2":
            receiverBank = "UBA";
            break;
          case "3":
            receiverBank = "Union";
            break;
          case "4":
            receiverBank = "Gtbank";
            break;
          case "5":
            receiverBank = "First Bank";
            break;
          default:
            alert("Invalid bank selection");
            break; // Changed from return to break
        }
        
        receiverDetailsConfirmed = confirm(`Please confirm receiver details:\nAccount number: ${receiverAccountNumber}\nBank: ${receiverBank}`);
        
        if (receiverDetailsConfirmed) {
          let transferAmount = prompt("Please enter the transfer amount");
          let confirmTransfer = confirm("Are you sure you want to transfer?");
          
          if (confirmTransfer) {
            transfer(parseInt(receiverAccountNumber), receiverBank, parseInt(transferAmount));
          }
        }
        break;
      default:
        alert("Invalid action");
        break;
    }
  } else {
    alert("Incorrect pin");
  }
} else {
  alert("Card not inserted");
}
