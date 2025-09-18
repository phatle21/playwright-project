// Write a function that checks if two numbers are equal using both == and === 
// and explains the difference in output.
function compareNumbers(a: number, b: number): void {
  console.log(`Comparing ${a} and ${b}`);

  // So sánh với ==
  const isEqualLoose = (a == (b as any)); // ép kiểu để thử so sánh "loose"
  console.log(`Using == : ${isEqualLoose}`);

  // So sánh với ===
  const isEqualStrict = (a === b);
  console.log(`Using ===: ${isEqualStrict}`);

  // Giải thích
  console.log("Explanation:");
  console.log("==  (loose equality) so sánh giá trị, tự động ép kiểu nếu cần.");
  console.log("=== (strict equality) so sánh cả giá trị và kiểu dữ liệu, KHÔNG ép kiểu.");
}

// Gọi hàm để kiểm thử
compareNumbers(5, 5);       // số so với số
compareNumbers(5, Number("5")); // số với số được ép kiểu từ chuỗi
// Nếu muốn thử so sánh số với chuỗi:
compareNumbers(5, "5" as any); // ép kiểu để so sánh khác kiểu dữ liệu
