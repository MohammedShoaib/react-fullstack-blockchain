// // const CONTACT_ADDRESS = '0xB7fC6C3DFebD24EAe16E307Ea39EdF7c93ff7866';
// const CONTACT_ADDRESS = '0x4E53E4EA1D0D6025b462b62903c0a795AC1e30d6';
// const CONTACT_ABI =[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contacts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"}],"name":"createContact","outputs":[],"stateMutability":"nonpayable","type":"function"}];
//
// module.exports = {
// 	CONTACT_ABI,
// 	CONTACT_ADDRESS,
// };
const CONTACT_ADDRESS = '0xc10674D457Db4C9B14ae6F49F1b1158dE8A76E73';

const CONTACT_ABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"contacts","outputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"string","name":"name","type":"string"},{"internalType":"string","name":"phone","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"count","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_phone","type":"string"}],"name":"createContact","outputs":[],"stateMutability":"nonpayable","type":"function"}];

module.exports = {
	CONTACT_ABI,
	CONTACT_ADDRESS,
};