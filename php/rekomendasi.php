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
        <p>Hai, <?php echo $_POST['nim']?></p>
        <?php
        $nim =  $_POST['nim'];
        $jurusan = $_POST['jurusan'];
        $semester = $_POST['semester'];
					
			if ($jurusan == "Informatika" && $semester == 1){
				echo "Berikut rekomendasi mata kuliah wajib yang bisa anda ambil: <br>";
				$matkulWajib = array("Pendidikan Agama Kristen (MH1013)","Bahasa Indonesia (MH1033)","Teknologi Komputer (T10203)" , "Praktikum Teknologi Komputer (T10022)" , "Matematika Teknik (TI0033)","Logika Matematika (TI0043)");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}

			}
			
			else if ($jurusan=="Informatika" && $semester == 2){
				
				echo "Berikut rekomendasi mata kuliah wajib yang bisa anda ambil: <br>";
				$matkulWajib = array("COSC1046" , "COSC1047" , "MATH1056");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}

			}
			
			else if ($jurusan=="Informatika"&& $semester == 3){
							
				echo "Berikut rekomendasi mata kuliah wajib yang bisa anda ambil: <br>";
				$matkulWajib = array("COSC1046" , "COSC1047" , "MATH1056");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}
			}
			else if ($jurusan=="Informatika" && $semester == 4){
				
				echo "Berikut rekomendasi mata kuliah wajib yang bisa anda ambil: <br>";
				$matkulWajib = array("COSC1046" , "COSC1047" , "MATH1056");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}
			}
			
			
			else if ($jurusan== "Sistem Informasi" && $semester == 1){
				
				$matkul = array("COSC1046" , "COSC1047" , "MATH1056");
				
				foreach ($matkul as $row){
					echo "$row <br>";
				}
			
			}
			
        ?>
    </article>

	<article id="content2">
		<p>Lihat rekomendasi matakuliah berdasarkan profil yang anda pilih!</p>
		<button type="submit" class="button"><span><a style="color: white; text-decoration:none;" href="matkul_pilihan.php">Go</a> </span></button>
		
		
	</article>
   
    
</body>
</html>