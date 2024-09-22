'use client'
import axios from 'axios'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const page = () => {


    const [propertyList, setPropertylist] = useState([])


    const fetchdata = async () => {
      try {
        const res = await axios.get('http://localhost:5000/property/getall');
        setPropertylist(res.data); // Set the fetched data into the state
        console.log(res.data);
  
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    useEffect(() => {
      fetchdata()
    }, [])
  
  
  
    function deleteuser(id) {
      axios.delete("http://localhost:5000/property/delete/" + id)
        .then((result) => {
          fetchdata()
        })
        .catch((err) => {
          console.log(err);
  
        })
    }
  

  return (
    <div className='w-full min-h-screen pt-36'>
      {/* <!-- Table Section --> */}
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  {/* <!-- Card --> */}
  <div class="flex flex-col">
    <div class="-m-1.5 overflow-x-auto">
      <div class="p-1.5 min-w-full inline-block align-middle">
        <div class="bg-white border border-gray-400 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-900 dark:border-neutral-700">
          {/* <!-- Header --> */}
          <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
            <div>
              <h2 class="text-xl font-semibold text-gray-800 dark:text-neutral-200 mb-3">
               Listing Of Properties :
              </h2>
              <p class="text-sm text-gray-600 dark:text-neutral-400">
                Keys you have generated to connect with third-party clients or access the <a class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500" href="#">Properties</a>
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" href="#">
                  View all
                </a>

                <Link class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="/AddProperty">
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Create
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End Header --> */}

          {/* <!-- Table --> */}
          <table class="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">

            <thead class="bg-gray-50 dark:bg-neutral-900">
              <tr>
                <th scope="col" class="ps-6 py-3 text-start">
                  <label for="hs-at-with-checkboxes-main" class="flex">
                    <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-main"/>
                    <span class="sr-only">Checkbox</span>
                  </label>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Owner Name
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                     Location
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      City
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Country
                    </span>
                  </div>
                </th>

                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Price
                    </span>
                  </div>
                </th>



                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                     Property View
                    </span>
                  </div>
                </th>



                <th scope="col" class="px-6 py-3 text-start">
                  <div class="flex items-center gap-x-2">
                    <span class="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                      Delete
                    </span>
                  </div>
                </th>


               
              </tr>
            </thead>

            <tbody class="divide-y divide-gray-200 dark:divide-neutral-700">

{propertyList.map((property) => {
    return<tr key={property._id}>

    <td class="size-px whitespace-nowrap">
      <div class="ps-6 py-3">
        <label for="hs-at-with-checkboxes-1" class="flex">
          <input type="checkbox" class="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-at-with-checkboxes-1"/>
          <span class="sr-only">Checkbox</span>
        </label>
      </div>
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <span class="text-sm text-gray-600 dark:text-neutral-400">{property.owner}</span>
      </div>
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <div class="flex items-center gap-x-2">
          <div class="grow">
            <span class="text-sm text-gray-600 dark:text-neutral-400">{property.location}</span>
          </div>
        </div>
      </div>
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <div class="flex items-center gap-x-2">
          <div class="grow">
            <span class="text-sm text-gray-600 dark:text-neutral-400">{property.city}</span>
          </div>
        </div>
      </div>
    </td>


    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <div class="flex items-center gap-x-2">
          <div class="grow">
            <span class="text-sm text-gray-600 dark:text-neutral-400  font-semibold">{property.country}</span>
          </div>
        </div>
      </div>
    </td>


    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <span class="text-sm text-gray-600 dark:text-neutral-400"><span className='font-bold text-gray-600'>Rs.</span>{property.price}</span>
      </div>
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-3">
        <Link 
          href={{
            pathname: '/view',
            query: { id: property._id }, // Pass the id as a query parameter
          }}
        id={property._id} class="text-sm text-gray-600 dark:text-neutral-600 hover:text-blue-500 hover:font-semibold">More :</Link>
      </div>
    </td>

    <td class="size-px whitespace-nowrap">
      <div class="px-6 py-1.5">
        <div class="hs-dropdown [--placement:bottom-right] relative inline-block">
        <button className="mr-4 px-3 py-1 bg-red-500 rounded-full text-white "
                  onClick={() => { deleteuser(property._id) }}
                >Delete</button>
          
          <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden divide-y divide-gray-200 min-w-40 z-10 bg-white shadow-2xl rounded-lg p-2 mt-2 dark:divide-neutral-700 dark:bg-neutral-800 dark:border dark:border-neutral-700" role="menu" aria-orientation="vertical" aria-labelledby="hs-table-dropdown-1">
            <div class="py-2 first:pt-0 last:pb-0">
              <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                Rename
              </a>
              <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                Regenrate Key
              </a>
              <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700 dark:focus:text-neutral-300" href="#">
                Disable
              </a>
            </div>
            <div class="py-2 first:pt-0 last:pb-0">
              <a class="flex items-center gap-x-3 py-2 px-3 rounded-lg text-sm text-red-600 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-red-500 dark:hover:bg-neutral-700" href="#">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </td>

  </tr>
})}




            </tbody>
          </table>
          {/* <!-- End Table --> */}

          {/* <!-- Footer --> */}
          <div class="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
            <div className='hover:text-blue-500 hover:font-semibold'>
              <p class="text-sm text-gray-600 dark:text-neutral-400 hover:text-blue-500 hover:font-semibold">
                <span class=" dark:text-neutral-200">{propertyList.length}</span> results
              </p>
            </div>

            <div>
              <div class="inline-flex gap-x-2">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  Prev
                </button>
<Link href="/Blog">
                <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
                  Next
                  <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </button>
                </Link>
              </div>
            </div>
          </div>
          {/* <!-- End Footer --> */}
        </div>
      </div>
    </div>
  </div>
  {/* <!-- End Card --> */}
</div>
{/* <!-- End Table Section --> */}
    </div>
  )
}

export default page

