<?php 

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $error_msg = [];

    function process_response() {
        if (!isset($_POST['username']) || trim($_POST['username']) == "") {
            $error_msg[] = 'Name is Required';   
        }

        $validEmailRegEx = "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i";

        if (!isset($_POST['email']) || !preg_match($validEmailRegEx, $_POST["email"])) {
            $error_msg[] = 'Email use incorrect format';
        }

        
        if (isset($_POST['phone'])) {
            $validPhoneRegEx = "/^[0-9]{9,15}(?![\S])$/i";
            $testphone = str_replace(['+','(',')','-','#',' '],'',$_POST["phone"]);
        }

        if (!isset($_POST['phone']) || !preg_match($validPhoneRegEx, $testphone)) {
            $error_msg[] = 'Telephone Number Incorrect Format';
        }

        if (!isset($_POST['enquiry']) || !isset($_POST['enquiry']) || trim($_POST['enquiry']) == "") {
            $error_msg[] = 'Message is required';
        }

        if (isset($error_msg)) {

            http_response_code(422);

            return $data = [
                'status' => 'error',
                'message' => $error_msg
            ];
        }

        $rootDir =  '../../../';
        include '../../../../app/controllers/dbconnect.php';

        $inputs =   [
                    'username' => $_POST["username"],
                    'company' => $_POST["company"],
                    'email' => $_POST["email"],
                    'phone' => $_POST["phone"],
                    'enquiry' => $_POST["enquiry"],
                    'marketing' => (int) filter_var($_POST["marketing"], FILTER_VALIDATE_BOOLEAN)
                    ];

        $query =   "INSERT INTO `nm_enquiries`
                    (`enquiry_name`, `enquiry_company`, `enquiry_email`, `enquiry_phone`, `enquiry_message`, `enquiry_marketing`)
                    VALUES
                    (:username,:company,:email,:phone,:enquiry, :marketing )
                    ";

        $stmt = $conn->prepare($query);

        $stmt->execute($inputs);

        http_response_code(201);

        return $data = [
            'status' => 'success',
            'message' => 'Enquiry Sent successfully '
        ];
    }
 
    // Pevent caching
    header('Cache-Control: no-cache, must-revalidate');
    header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');

    //Set the content type
    header('Content-Type: application/json; charset=utf-8');
    
    $data = process_response();
    //Encode and output the data
    echo json_encode($data);
}
?>