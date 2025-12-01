import React from 'react'
import Navbar from '../components/Navbar'
import {PROBLEMS} from '../data/problems'
import { Code2Icon } from 'lucide-react';

function ProblemsPage() {
  const Problems = Object.values(PROBLEMS);
  return (
    <div className='min-h-screen bg-base-200'>
      <Navbar/>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        {/* Header */}
        <div className='mb-8'>
          <h1 className='text-4xl font-bold mb-2'>Practice Problems</h1>
        <p className='text-base-content/70'>
        Sharpen your coding skills with these curated Problems

        </p>
        </div>
        {/* Problems list */}

        <div className='space-y-4'>
         {Problems.map(problem =>(
          <Link key={problem.id}
          to={`/problem/${problem.id}`}
          className='card bg-base-100 hover:scale-[1.01] transition-transform '
          >
            <div className='card-body'>
              <div className='flex items-center justify-between gap-4'>
                {/* Left side */}
                <div className='flex-1'>
                  <div className='flex items-center gap-3 mb-2'>
                    <div className='size-12 rounded-lg bg-primary/10 flex items-center justify-center'>
                    <Code2Icon className='size-6 text-primary'/>

                    </div>

                  </div>

                </div>

              </div>

            </div>
          </Link>
         ))} 

        </div>

      </div>
    </div>
  )
}

export default ProblemsPage