

export default function googleAuth() {
    

    return (
      <form
        action='http://idealibs.cyclic.app/auth/google'
      >
        <button type='submit' className="flex justify-center items-center rounded-iform w-full h-14 bg-white mb-4 gap-4">
            <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.14 9.20443C18.14 8.56625 18.0827 7.95262 17.9764 7.36353H9.5V10.8449H14.3436C14.135 11.9699 13.5009 12.9231 12.5477 13.5613V15.8194H15.4564C17.1582 14.2526 18.14 11.9453 18.14 9.20443Z" fill="#4285F4"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49976 18C11.9298 18 13.967 17.1941 15.4561 15.8195L12.5475 13.5613C11.7416 14.1013 10.7107 14.4204 9.49976 14.4204C7.15567 14.4204 5.17158 12.8372 4.46385 10.71H1.45703V13.0418C2.93794 15.9831 5.98158 18 9.49976 18Z" fill="#34A853"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46409 10.7101C4.28409 10.1701 4.18182 9.59325 4.18182 9.00007C4.18182 8.40689 4.28409 7.83007 4.46409 7.29007V4.95825H1.45727C0.847727 6.17325 0.5 7.5478 0.5 9.00007C0.5 10.4523 0.847727 11.8269 1.45727 13.0419L4.46409 10.7101Z" fill="#FBBC05"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.49976 3.57955C10.8211 3.57955 12.0075 4.03364 12.9402 4.92545L15.5216 2.34409C13.9629 0.891818 11.9257 0 9.49976 0C5.98158 0 2.93794 2.01682 1.45703 4.95818L4.46385 7.29C5.17158 5.16273 7.15567 3.57955 9.49976 3.57955Z" fill="#EA4335"/>
            </svg>
            <p className="text-i01 font-semibold">Sign in with Google</p>
        </button>
      </form>
        
    )
}