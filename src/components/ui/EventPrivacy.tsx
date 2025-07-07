export default function EventPrivacy() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-75 p-4">
            <div className="bg-white rounded-lg p-8 shadow-xl text-center">
                <p className="text-lg font-semibold text-gray-800 mb-6">Privacidad de evento</p>
                <p className="text-gray-600 mb-6">Escoja quienes podrían asistir al evento</p>
                <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between bg-[#F1EEF9] p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-[#3B3D5E] flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-3 5a3 3 0 10-2.83 4H13.83A3 3 0 0011 13z" clipRule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Publico</p>
                                <p className="text-sm text-gray-500">Cualquiera podrá ver y unirse al evento</p>
                            </div>
                        </div>
                        <input type="radio" name="privacy" value="public" className="form-radio text-[#B99F7B] h-5 w-5"/>
                    </div>
                    <div className="flex items-center justify-between bg-[#F1EEF9] p-4 rounded-lg shadow-sm">
                        <div className="flex items-center">
                            <div className="w-8 h-8 rounded-full bg-[#3B3D5E] flex items-center justify-center mr-3">
                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">Privado</p>
                                <p className="text-sm text-gray-500">Solo personas invitadas pueden unirse</p>
                            </div>
                        </div>
                        <input type="radio" name="privacy" value="private" className="form-radio text-[#B99F7B] h-5 w-5" checked/>
                    </div>
                </div>

                <div className="bg-[#F1EEF9] p-4 rounded-lg shadow-sm mb-8">
                    <p className="font-semibold text-gray-800 mb-2">Permisos de encargados</p>
                    <p className="text-sm text-gray-500 mb-4">¿Los encargado pueden invitar?</p>
                    <div className="flex justify-center">
                        <input type="radio" name="invite_permission" value="yes" className="form-radio text-[#B99F7B] h-5 w-5 mx-2"/> Sí
                        <input type="radio" name="invite_permission" value="no" className="form-radio text-[#B99F7B] h-5 w-5 mx-2" checked/> No
                    </div>
                </div>

                    <button className="bg-[#B99F7B] hover:bg-[#A38D6D] text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:shadow-outline">
                        Listo?
                    </button>
                </div>
            </div>
        


    );
}