<?php 
$page_title = "Contact Us";
$page_heading = "Our Offices"; 

include __DIR__ . '/../app/views/shared/header.php';
include __DIR__ . '/../app/views/shared/breadcrumbs.php';
?>
            <div id="section-offices" class="site-section">
                <div class="container">
                    <div class="office">
                        <div class="office-img">
                            <a href="#">
                                <img src="./assets/img/offices/cambridge.jpg" alt="Cambridge Office">
                            </a>
                        </div>
                        <div class="office-content">
                            <h2><a href="#">Cambridge Office</a></h2>
                            <p>
                                Unit 1.31,
                                St John's Innovation Centre,
                                Cowley Road, Milton,
                                Cambridge,
                                CB4 0WS
                            </p>
                            <a href="tel#"><span class="tel">01223 37 57 72</span></a>
                        </div>
                        <div class="view-more">
                            <a href="#">View More</a>
                        </div>
                    </div>

                    <div class="office">
                        <div class="office-img">
                            <a href="#">
                                <img src="./assets/img/offices/wymondham.jpg" alt="Wymondham">
                            </a>
                        </div>
                        <div class="office-content">
                            <h2><a href="#">Wymondham Office</a></h2>
                            <p>
                                Unit 15,
                                Penfold Drive,
                                Gateway 11 Business Park,
                                Wymondham, Norfolk,
                                NR18 0WZ
                            </p>
                            <a href="tel#"><span class="tel">01603 70 40 20</span></a>
                        </div>
                        <div class="view-more">
                            <a href="#">View More</a>
                        </div>
                    </div>

                    <div class="office">
                        <div class="office-img">
                            <a href="#">
                                <img src="./assets/img/offices/yarmouth-2.jpg" alt="Yarmouth Office">
                            </a>
                        </div>
                        <div class="office-content">
                            <h2><a href="#">Great Yarmouth Office</a></h2>
                            <p>
                                Suite F23,
                                Beacon Innovation Centre,
                                Beacon Park, Gorleston,
                                Great Yarmouth, Norfolk,
                                NR31 7RA
                            </p>
                            <a href="tel#"><span class="tel">01493 60 32 04</span></a>
                        </div>
                        <div class="view-more">
                            <a href="#">View More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="section-contact-us" class="site-section">
                <div class="container">
                    <div>
                        <div>
                            <p>Email us on:<p>
                            <p>sales@netmatters.com<p>
                            <p>Speak to Sales on:<p>
                            <p>01603 515007<p>
                            <p>Business hours:<p>
                            <p>Monday - Friday 07:00 - 18:00<p> 
                        </div>
                        <div>
                            <h4>Out of Hours IT Support<h4>
                            <div>
                                <p>Netmatters IT are offering an Out of Hours service for Emergency and Critical tasks.<p>
                                <p>
                                    <strong>Monday - Friday 18:00 - 22:00</strong>
                                    <strong>Saturday 08:00 - 16:00</strong>
                                    <strong>Sunday 10:00 - 18:00</strong>
                                </p>
                                <p>To log a critical task, you will need to call our main line number and select Option 2 to leave an Out of Hours  voicemail. A technician will contact you on the number provided within 45 minutes of your call. </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form action="#" method="#">
                            <label for="name">
                                <span>Your Name <span>*</span></span>
                                <input id="name" name="name" type="text">
                            </label>
                            <label for="company">
                                <span>Company Name <span>*</span></span>
                                <input id="company" name="company" type="text">
                            </label>
                            <label for="email">
                                <span>Your Email </span>
                                <input id="email" name="email" type="text">
                            </label>
                            <label for="phone">
                                <span>Your Telephone Number <span>*</span></span>
                                <input id="phone" name="phone" type="text">
                            </label>
                            <label for="message">
                                <span>Message <span>*</span></span>
                                <textarea id="message" name="message"></textarea>
                            </label>
                            <div>
                                <input id="marketing" name="marketing" type="checkbox">
                                <p>Please tick this box if you wish to receive marketing information from us. Please see our Privacy Policy for more information on how we keep your data safe.</p>
                            </div>
                            <div>
                                <button type="submit"></button>
                                <p><span>*</span>Fields Required</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
<?php include __DIR__ . '/../app/views/shared/footer.php';?>