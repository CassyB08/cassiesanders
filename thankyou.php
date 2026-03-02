<?php
if ($_POST["email"]<>'') {
    $ToEmail = 'cassyb145@gmail.com';
    $EmailSubject = 'Site contact form';
    $mailheader = "From: ".$_POST["email"]."\r\n";
    $mailheader .= "Reply-To: ".$_POST["email"]."\r\n";
    $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $MESSAGE_BODY = "Name: ".$_POST["name"]."";
    $MESSAGE_BODY .= "Email: ".$_POST["email"]."";
    $MESSAGE_BODY .= "Comment: ".nl2br($_POST["comment"])."";
    mail($ToEmail, $EmailSubject, $MESSAGE_BODY, $mailheader) or die ("Failure");
?>
<!--Bootstrap4-->
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/main-styles.css">
<link href="/fonts/stylesheet.css" rel="stylesheet">
<!--End bootstrap 4-->

<!--Header and footer JS-->
<script src="/header.js" type="text/javascript" defer></script>
<script src="/footer.js" type="text/javascript" defer></script>
<!--End H&F JS-->


<!--Bootstrap 3 & my stylesheet-->
    <link rel="stylesheet" href="/main-styles.css">
 <!--END Bootstrap 3 & my stylesheet-->      
 
</head>

<body class="wrapper">

  <header-component></header-component>


<section id="contact-intro" class="center padding-default">
    <div class="container">
        <div class="row justify-center">
            <div class="col-12 col-lg-8">
                <img class="skill-icon" alt="Web Designer" src="/imgs/global/computeremail.png" />
                 <h1 class="main-title">Your message is on the way!</h1>
                <p>Thank you for starting the conversation. Knowing me, I will probably write back really soon. Meanwhile, look around at what more I have to offer.</p>
            </div>
            <div class="col-12">
                <a href="/" title="Cassie Sanders' Portfolio" target="_parent">
                  <button type="button" class="btn btn-primary">View More</button></a>
            </div>
        </div>           
    </div>
</section>

<footer-component></footer-component>


<style>
    .btn-primary a:active{background-color:#360000 !important;
  border-color: #360000;}
  .skill-icon{width: 200px;
    height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;}

</style>
</body>

<?php
}/*else {
?>
<form  method="post">
<table width="400" border="0" cellspacing="2" cellpadding="0">
<tr>
<td width="29%" class="bodytext">Your name:</td>
<td width="71%"><input name="name" type="text" id="name" size="32"></td>
</tr>
<tr>
<td class="bodytext">Email address:</td>
<td><input name="email" type="text" id="email" size="32"></td>
</tr>
<tr>
<td class="bodytext">Comment:</td>
<td><textarea name="comment" cols="45" rows="6" id="comment" class="bodytext"></textarea></td>
</tr>
<tr>
<td class="bodytext"> </td>
<td align="left" valign="top"><input type="submit" name="Submit" value="Send"></td>
</tr>
</table>
</form>
<?php
};
?>*/
