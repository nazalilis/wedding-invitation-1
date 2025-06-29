<script>
	const month = new Date().getMonth() + 2;

	const pria = {
		nama_lengkap: "Little Ghost",
		nama: "Ghost",
		deskripsi: "",
		alamat: "",
		ibu: "",
		ayah: "",
	};

	const wanita = {
		nama_lengkap: "Dandelion",
		nama: "Dandelion",
		deskripsi: "",
		alamat: "",
		ibu: "",
		ayah: "",
	};

	const tempatRes = {
		tempat: "Gunungkidul, Yogyakarta",
	};

	const waktuResepsi = {
		tanggal: 30,
		bulan: month,
		tahun: 2025,
		jam: 10,
		menit: 0,
	};

	export default {
		namaMempelai: { pria, wanita },
		waktuRes: { waktuResepsi, detik: 0, milidetik: 0 },
	};
</script>
