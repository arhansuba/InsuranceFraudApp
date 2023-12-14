from web3 import Web3

w3 = Web3(Web3.HTTPProvider('http://localhost:8545'))  # Ethereum ağınıza uygun URL'yi girin

address = '0xYourSmartContractAddress'
abi = [...]  # Akıllı kontratın ABI'sini buraya yapıştırın

contract = w3.eth.contract(address=address, abi=abi)

result = contract.functions.yourSmartContractFunction().call()
print(result)

 