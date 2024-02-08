<!DOCTYPE html>
<html lang="en">

<?php
include_once('php/models/general_model.php');
$model = new generalModel();
$statusTypes = $model->getStatusTypes();
$allUsers = $model->getAllUsers();
include_once('php/views/head.php');
?>

<body>
    <?php
    include_once('php/views/header.php');
    include_once('php/views/navbar.php');
    ?>
    <!-- Start Content-->

    <main id="main" class="main">
        <?php
        $include_file = '';
        if (isset($_GET['submodule'])) {
            $submodule = $_GET['submodule'];
            switch ($submodule) {
                case 'users_list':
                    $include_file = 'php/views/users_list/usersList.php';
                    break;
                case 'admin_users':
                        $include_file = 'php/views/admin_users/adminUsers.php';
                    break;    
                default:
                    $include_file = 'php/views/users_list/usersList.php';
                    break;
            }
        } else {
            $include_file = 'php/views/users_list/admin_users.php';
        }


        include $include_file;

        ?>
    </main>

    <?php
    include_once('php/views/endpage.php');
    include_once('php/views/foot.php');
    ?>


</body>

</html>