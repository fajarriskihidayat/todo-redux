function getMonthName(monthNumber) {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  return monthNames[monthNumber - 1] || "Bulan tidak valid";
}

export const formatDate = () => {
  const date = new Date();

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(getMonthName(date.getMonth() + 1)).padStart(2, "0");
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};
