const kendaraan: string[] = ['mobil', 'motor', 'pesawat'];
console.log(kendaraan); // Output: [ 'mobil', 'motor', 'pesawat' ]

const Perusahaan: Readonly<string[]> = ['Google', 'Facebook', 'Microsoft']; 
//Perusahaan[0] = 'Apple'; // Error: Cannot assign to '0' because it is a read-only property.
//Perusahaan.push('Amazon'); // Error: Property 'push' does not exist on type 'readonly string[]'.
console.log(Perusahaan); // Output: [ 'Google', 'Facebook', 'Microsoft' ]