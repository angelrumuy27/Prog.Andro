<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <header>
        <h1 id="judul">Rekomendasi Matakuliah TI UKDW</h1>
    </header>
    <article id="content1">
        <form action="rekomendasi.php" method="POST">
            <label for="nim">NIM</label><br>
            <input type="number" id="nim" name="nim" placeholder="Masukan nim anda" required><br>

            <label for="jurusan">Jurusan</label><br>
            <select name="jurusan" id="jurusan" required>
                <option value="">Select...</option>
                <option value="Informatika">Informatika</option>
                <option value="Sistem Informasi">Sistem Informasi</option>
            </select><br>

            <label for="semester">Semester</label><br>
            <select name="semester" id="semester" required>
                <option value="">Select...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select><br>


            <button type="submit" class="button"><span>Submit </span></button>

        </form>
    </article>
    
    <div>
        <a href="chatbot.php"><img style="width: 10%;" src="../img/chatbot icon.gif" alt=""></a>
    </div>
   
    
</body>
</html>