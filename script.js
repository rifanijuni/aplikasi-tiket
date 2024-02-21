alert(`Selamat Datang di Aplikasi Tiket!`);

const nama = prompt(`Masukkan nama Anda:`);
const umur = parseInt(prompt(`Masukkan umur Anda:`));

if (umur > 13) {
    const studio = prompt(`Anda boleh masuk studio. Silahkan pilih studio A, B, atau C:`);

    if (studio === 'A') {
        alert(`Tiket ${nama}, Studio A, Umur ${umur}`);
    } else if (studio === 'B') {
        alert(`Tiket ${nama}, Studio B, Umur ${umur}`);
    } else if (studio === 'C') {
        alert(`Tiket ${nama}, Studio C, Umur ${umur}`);
    } else {
        alert(`Studio tidak valid.`);
    }
    
} else {
    alert(`Maaf, Anda tidak boleh masuk studio karena umur Anda harus di atas 13 tahun.`);
}
