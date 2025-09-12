<?php 
error_reporting(E_ALL);
ini_set("display_errors", 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $config = parse_ini_file('../.env');

    $servername = $config["DBADDRESS"];
    $dbname = $config["DBNAME"];
    $username = $config["DBUSER"];
    $password = $config["DBPASS"];

    try {
        $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $e) {
        echo "Connection failed: " . $e->getMessage();
    }

    // Required - Check if exists
    if (!isset($_POST['username'])) {
        exit("Name not supplied");
    }

    $validEmailRegEx = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i";

    // Email - Check if valid
    if (!preg_match($validEmailRegEx, $_POST["email"])) {
        exit("Email not valid");
    }

    // Check Number Format
    $validPhoneRegEx = "/^[0-9]{9,15}(?![\S])$/i";
    $testphone = str_replace(['+','(',')','-','#',' '],'',$_POST["phone"]);

    if (!preg_match($validPhoneRegEx, $_POST["phone"])) {
        exit("Telephone Incorrect Format");
    }

    // Message Check If Exists
    if (!isset($_POST['enquiry'])) {
        exit("Message not supplied");
    }

    $username = $_POST["username"];
    $company = $_POST["company"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $enquiry = $_POST["enquiry"];
    $marketing = (int) filter_var($_POST["marketing"], FILTER_VALIDATE_BOOLEAN);

    $inputs =   [
                'username' => $username,
                'company' => $company,
                'email' => $email,
                'phone' => $phone,
                'enquiry' => $enquiry,
                'marketing' => $marketing
                ];

    $query =   "INSERT INTO `nm_enquiries`
                (`enquiry_name`, `enquiry_company`, `enquiry_email`, `enquiry_phone`, `enquiry_message`, `enquiry_marketing`)
                VALUES
                (:username,:company,:email,:phone,:enquiry, :marketing )
                ";

    $stmt = $conn->prepare($query);

    $stmt->execute($inputs);

    // Pevent caching
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    //Set the content type
    header('Content-Type: application/json; charset=utf-8');

    //Your data
    $data = [
    'status' => 'success',
    'message' => 'Enquiry Sent successfully'
    ];

    //Encode and output the data
    echo json_encode($data);
}
?>