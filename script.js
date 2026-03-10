// Format Rupiah
const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(angka);
};

// 1. Logika Supervised Learning (Prediksi Budget)
function predictBudget() {
    const guests = parseInt(document.getElementById('guestCount').value);
    const themeCost = parseInt(document.getElementById('themeSelect').value);
    const resultBox = document.getElementById('budgetResult');

    if (!guests || guests <= 0) {
        alert("Silakan masukkan jumlah tamu yang valid!");
        return;
    }

    // Algoritma: Harga Katering (Rp 75.000/orang) + Biaya Dasar Tema
    const costPerGuest = 75000;
    const predictedTotal = (guests * costPerGuest) + themeCost;

    resultBox.style.display = "block";
    resultBox.style.borderColor = "#d81b60";
    resultBox.innerHTML = `
        <strong>Estimasi Supervised ML:</strong><br>
        <h3 style="color: #d81b60; margin-top: 5px;">${formatRupiah(predictedTotal)}</h3>
        <small>Berdasarkan regresi linear data vendor 2024</small>
    `;
}

// 2. Logika Smart Negotiation
function startNego() {
    const vendorPrice = 50000000; // Harga asli 50 juta
    const userOffer = parseInt(document.getElementById('negoInput').value);
    const resultBox = document.getElementById('negoResult');

    if (!userOffer || userOffer <= 0) {
        alert("Masukkan angka penawaran!");
        return;
    }

    resultBox.style.display = "block";
    resultBox.style.borderColor = "#3f51b5";

    if (userOffer < (vendorPrice * 0.6)) {
        resultBox.innerHTML = `❌ <strong>Ditolak!</strong> Harga terlalu jauh di bawah standar pasar. Vendor akan rugi.`;
    } else if (userOffer >= (vendorPrice * 0.85)) {
        resultBox.innerHTML = `✅ <strong>Deal!</strong> Harga disetujui. Algoritma menilai penawaran ini wajar.`;
    } else {
        resultBox.innerHTML = `🤝 <strong>Masuk Akal, tapi...</strong> Vendor minta naikkan sedikit lagi agar sepakat.`;
    }
}

// 3. Logika Unsupervised Learning (Clustering Tamu)
function clusterGuests() {
    const resultBox = document.getElementById('clusterResult');
    
    // Simulasi hasil algoritma K-Means Clustering
    resultBox.style.display = "flex";
    resultBox.innerHTML = `
        <div class="cluster-group">
            <h3 style="color:#9c27b0;">Cluster A</h3>
            <p>Keluarga Inti & VIP</p>
            <small>Meja 1 - 5</small>
        </div>
        <div class="cluster-group">
            <h3 style="color:#9c27b0;">Cluster B</h3>
            <p>Teman Kantor / Bisnis</p>
            <small>Meja 6 - 12</small>
        </div>
        <div class="cluster-group">
            <h3 style="color:#9c27b0;">Cluster C</h3>
            <p>Teman Sekolah / Kuliah</p>
            <small>Meja 13 - 20</small>
        </div>
    `;
}
