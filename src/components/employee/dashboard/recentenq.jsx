import axios from 'axios';
import React from 'react'
import { useSelector } from 'react-redux';
import { baseapiurl } from '../../../common/api';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../loader/loader';

function Recentenq() {
    const { userData } = useSelector((state) => state.MainApp);
    const getRecentEnq = async () => {
        const { data } = await axios.post(`${baseapiurl}/enquiry/recent-enq`,{
          token:userData.token
        });
    
        return data;
      };
      const { data, error, isLoading } = useQuery(["getRecentEnq"], getRecentEnq, {
        enabled: true,
      });
    
      if (isLoading || error) return <Loader />;
  return (
    <div className="table-responsive">
                        <table className="table table-bordered text-center mb-0 mt-2">
                          <thead>
                            <tr>
                              <th>Sl.No</th>
                              <th>Customer Name</th>
                              <th>Date Enquired</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {data.response.map((dat,index)=>
                            <tr key={index}>
                            <th scope="row">{index +1}</th>
                            <td>{dat.Full_Name}</td>
                            <td>{dat.test_drive_date}</td>
                            <td>
                              <button
                                type="button"
                                className={`btn btn-sm ${dat.Current_Status == "Processing"? 'btn-primary':dat.Current_Status == "Cancelled"? 'btn-danger': 'btn-success'}`}
                              >
                                {dat.Current_Status}
                              </button>
                            </td>
                          </tr>
                            )}
                            
                          </tbody>
                        </table>
                      </div>
  )
}

export default Recentenq