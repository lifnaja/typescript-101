const prices: number[] = [100, 200, 500, 1000];

const pricesWithVat = prices.map((price: number): number => price * 1.07);

console.log("ราคาเดิม:", prices);
console.log("ราคาที่รวม VAT 7%:", pricesWithVat);



const calVat = (price: number): number => price * 1.07;

const pricesWithVat2 = prices.map(calVat);

console.log("ราคาที่รวม VAT 7% (ใช้ฟังก์ชันแยก):", pricesWithVat2);