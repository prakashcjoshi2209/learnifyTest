
// 'use client';

// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
// }

// export default function ContactForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const [submitted, setSubmitted] = useState(false);
//   const router = useRouter();

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await fetch('/api/quiz/user', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         console.log('Data saved:', data);
//         setSubmitted(true);
//         router.push('/quiz'); // Navigate to users page after saving
//       } else {
//         console.error('Failed to save data');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold text-black mb-4">Contact Form</h2>
//       {submitted ? (
//         <p className="text-green-500">Form submitted successfully!</p>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               {...register('name', { required: 'Name is required' })}
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               {...register('email', {
//                 required: 'Email is required',
//                 pattern: {
//                   // value: /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/,
//                   message: 'Invalid email address',
//                 },
//               })}
//               type="email"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               {...register('phone', { required: 'Phone number is required' })}
//               type="tel"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
//           </div>

//           <button type="submit" className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition">
//             Submit
//           </button>
//         </form>
//       )}
//     </div>
//   );
// }


// 'use client';

// import { useForm } from 'react-hook-form';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// interface FormData {
//   name: string;
//   email: string;
//   phone: string;
// }

// export default function ContactForm() {
//   const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
//   const [submitted, setSubmitted] = useState(false);
//   const [errorMessage, setErrorMessage] = useState<string | null>(null);
//   const router = useRouter();

//   const onSubmit = async (data: FormData) => {
//     try {
//       const response = await fetch('/api/quiz/user', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json();

//       if (response.ok) {
//         // If the form is successfully submitted, redirect to the quiz page
//         console.log('Form submitted successfully');
//         setSubmitted(true);
//         router.push(result.redirectTo);  // Navigate to the quiz page
//       } else {
//         // If there's an error (like email already exists), show the error message
//         setErrorMessage(result.message || 'Error submitting form');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setErrorMessage('An error occurred. Please try again.');
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-xl font-semibold mb-4">Contact Form</h2>
//       {submitted ? (
//         <p className="text-green-500">Form submitted successfully! You will now be redirected to the quiz.</p>
//       ) : (
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700">Name</label>
//             <input
//               {...register('name', { required: 'Name is required' })}
//               type="text"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Email</label>
//             <input
//               {...register('email', { required: 'Email is required' })}
//               type="email"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700">Phone Number</label>
//             <input
//               {...register('phone', { required: 'Phone number is required' })}
//               type="tel"
//               className="mt-1 p-2 w-full border rounded-md text-black"
//             />
//             {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
//           </div>

//           <button type="submit" className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition">
//             Submit
//           </button>

//           {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
//         </form>
//       )}
//     </div>
//   );
// }

"use client"
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRouter } from 'next/navigation';


interface FormData {
  name: string;
  email: string;
  phone: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/quiz/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        // If the form is successfully submitted, redirect to the quiz page
        console.log('Form submitted successfully');
        setSubmitted(true);
        router.push(result.redirectTo);  // Navigate to the quiz page
        localStorage.setItem('userEmail', data.email); // Store email in localStorage for quiz submission
      } else {
        // If there's an error (like email already exists), show the error message
        setErrorMessage(result.message || 'Error submitting form');
      }
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4 text-black">Contact Form</h2>
      {submitted ? (
        <p className="text-green-500">Form submitted successfully! You will now be redirected to the quiz.</p>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register('name', { required: 'Name is required' })}
              type="text"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              {...register('email', { required: 'Email is required' })}
              type="email"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="tel"
              className="mt-1 p-2 w-full border rounded-md text-black"
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <button type="submit" className="mt-6 w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition">
            Submit
          </button>

          {errorMessage && <p className="text-red-500 text-sm mt-4">{errorMessage}</p>}
        </form>
      )}
    </div>
  );
}
