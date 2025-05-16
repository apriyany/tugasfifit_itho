import type { HttpContext } from '@adonisjs/core/http'
import DataSiswa from '#models/data_siswa'

export default class DataSiswasController {
    public async index({response }: HttpContext)
    {
        const data_siswas = await DataSiswa.all();
        return response.ok(data_siswas);
     }

    public async store({request, response }: HttpContext)
    {
        const data = request.only(['nama', 'kelas', 'jurusan']);
        const data_siswa = await DataSiswa.create(data);
        return response.created(data_siswa);
     }
  
    public async show({params, response }: HttpContext)
    {
        const data_siswa = await DataSiswa.find(params.id);
        if (!data_siswa) {
            return response.notFound({ message: 'Gada cek ' });
        }
        return response.ok({
            status: 'success',
            message: 'Data Siswa found',
            data: data_siswa
            });

        return response.ok(data_siswa);
}      
    public async update({params, request, response }: HttpContext)
    {
        const data_siswa = await DataSiswa.find(params.id);
        if (!data_siswa) {
            return response.notFound({ message: 'Gada cek ' });
        }
        const data = request.only(['nama', 'kelas', 'jurusan']);
        data_siswa.merge(data);
        await data_siswa.save();
        return response.ok(data_siswa);
     }
    public async destroy({params, response }: HttpContext)
    {
        const data_siswa = await DataSiswa.find(params.id);
        if (!data_siswa) {
            return response.notFound({ message: 'Gada cek ' });
        }
        await data_siswa.delete();
        return response.noContent();    
     }
}