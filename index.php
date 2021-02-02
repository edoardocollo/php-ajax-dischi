

<?php
  include 'dist/php/db.php';
?>


<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>php-ajax-dischi</title>
    <link rel="stylesheet" href="dist/css/style.css">
  </head>
  <body>

    <?php foreach ($dischiDb as $card) { ?>

      <div class="card">
        <img src="<?php echo $card['poster']; ?>" alt="">
        <h2><?php echo $card['title'];?></h2>
        <h3><?php echo $card['author'];?></h3>
        <h4><?php echo $card['genre'];?></h4>
        <h4><?php echo $card['year'];?></h4>
      </div>




    <?php } ?>


    <script src="dist/js/main.js" charset="utf-8"></script>
  </body>
</html>
