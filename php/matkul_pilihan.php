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
    <form action="matkul_pilihan.php" method="post">
		<label style="font-weight: normal;" for="profil">Pilih Profil</label><br>
            <select name="profil" id="semester" required>
                <option value="">Select...</option>
                <option value="System Programmer">System Programmer</option>
                <option value="Software Engineer">Software Engineer</option>
                <option value="Database Administrator">Database Administrator</option>
                <option value="User Interface Designer">User Interface Designer</option>
                <option value="Intelligent System Developer">Intelligent System Developer</option>
            </select><br>
			<button type="submit" name = "submit" value="submit" class="button"><span>Lihat </span></button>

		</form>

        <?php
        if(isset($_POST['submit'])){
            echo "<p style='text-align: center; font-weight: bold;'>".$_POST['profil']."</p>";
            $profil =  $_POST['profil'];
       		
			if ($profil == "System Programmer"){
				echo "Berikut rekomendasi mata kuliah pilihan untuk profil Sytem Programmer: <br>";
                echo "<br>";
				$matkulWajib = array("Internet of Things (TI17013)","Pemrograman Perangkat Bergerak Berbasis Android (TI7033)","Pemrograman Perangkat Bergerak Berbasis iOS (TI7023)");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}

			}
			
			else if ($profil == "Software Engineer"){
				
				echo "Berikut rekomendasi mata kuliah untuk profil Software Engineer: <br>";
				$matkulWajib = array("COSC1046" , "COSC1047" , "MATH1056");
				
				foreach ($matkulWajib as $row){
					echo "$row <br>";
				}

			}

        }
			
			
        ?>
		

    </article>

    <button id="back"><a href="index.php">Back to home</a></button>
    
</body>
</html>