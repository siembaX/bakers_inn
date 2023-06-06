import { Navbar } from '../js/components/Navbar'

export default function Contact() {
    return (
      <div className="wrapper">
      <Navbar />
            <div className="contact-section">
                <h2>Contact Us</h2>
           </div>
           <div className="gap-below"></div>
           <div className='gap-below'></div>

           <div className="table-section">
           <h2>List Of Baker’s Inn Depots</h2>
           <div className="gap-below"></div>
           <table id="rwd-table">
              <thead>
                <tr>
                  <th> <strong>Depot</strong> </th>
                  <th className='test-head1'> <strong>Address</strong> </th>
                  <th> <strong>Phone Number</strong> </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                <td><strong>Chinhoyi Depot</strong></td>
                  <td className='test-head1'>94/95 Josiah Tongogara St, Industrial Site, Chinhoyi</td>
                <td><strong>0772 318 309</strong></td>
                </tr>
                <tr>
                <td><strong>Bindura Depot</strong></td>
                  <td className='test-head1'>461 Luton Road, Industrial Site, Bindura</td>
                  <td><strong>066 2107317</strong></td>
                </tr>
                <tr>
                  <td><strong>Murehwa Depot</strong></td>
                  <td className='test-head1'>Stand number 351 Murehwa Growth Point</td>
                  <td><strong>0652 122 514</strong></td>
                </tr>
                <tr>
                  <td><strong>Mutare Depot</strong></td>
                  <td className='test-head1'>5-7 Glasgow Road, Industrial Site, Mutare</td>
                  <td><strong>020 60715</strong></td>
                </tr>
                <tr>
                  <td></td>
                  <td className='test-head1'></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td className='test-head1'></td>
                  <td></td>
                </tr>
                <tr>
                  <td><strong>Hwange Depot</strong></td>
                  <td className='test-head1'>29 Derby Drive, Hwange Industrial Site</td>
                  <td><strong>0281 2820105</strong></td>
                </tr>
                <tr>
                  <td><strong>Chiredzi Depot</strong></td>
                  <td className='test-head1'>329 Lion Drive, Chiredzi</td>
                  <td><strong>0231 231 2709</strong></td>
                </tr>
                <tr>
                  <td><strong>Masvingo Depot</strong></td>
                  <td className='test-head1'>1310 Mineral Road, Masvingo</td>
                  <td><strong>039 266 333</strong></td>
                </tr>
                <tr>
                  <td><strong>Gweru Depot</strong></td>
                  <td className='test-head1'>1843 Main Street, Gweru</td>
                  <td><strong>054 2220 858</strong></td>
                </tr>
                <tr>
                  <td><strong>Zvishavane Depot</strong></td>
                  <td className='test-head1'>Shabanie Mine Club, Noelville, Zvishavane</td>
                  <td><strong>0772 395567</strong></td>
                </tr>
              </tbody>
            </table>
           </div>



           <div className="packing-team">
              
           </div>

           <div className="items-apart">
            <div>
              <h3>For job enquiries , email your CV to</h3>
              <p>hr@bakersinnzim.com</p>
            </div>

            <div>
              <h3>For general enquiries, email</h3>
              <p>marketing@bakersinnzim.com</p>
            </div>
           </div>

           <div className="request-callback-section">
            <h2>Request A Callback</h2>
            <p>Complete the form below and we will respond within 24 hours.</p>

            <form action="">
                <div>
                <select id="yourTitle" >
                <option value="Your Title">Your Title</option>
                    <option value="sir">Sir</option>
                    <option value="dr.">Dr.</option>
                    <option value="Prof">Prof.</option>
                </select>
                  <input type="text" placeholder='Your Name' />
                </div>
                  
                <div>
                <input type="text" name="" id="" placeholder='Your Phone Number'/>
                <input type="text" name="" id="" placeholder='Your E-mail'/>
                </div> 

                <div>
                  <select name="" id="interestarea">
                    <option value="interestarea">Select Area Of Interest</option>
                    <option value="interestarea">Food</option>
                  </select>             
                </div>

                <div>
                <select name="" id="interestarea">
                    <option value="">Nature Of Enquiry</option>
                    <option value="">Value 2</option>
                  </select>
                </div>

                <div>
                <select name="" id="interestarea">
                    <option value="">Do You Want To Be Contacted By Phone</option>
                    <option value="">Value 2</option>
                  </select>
                </div>

                <div>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'>

                  </textarea>
                </div>

                <button>SUBMIT</button>
            </form>
           </div>
      </div>
    );
  }