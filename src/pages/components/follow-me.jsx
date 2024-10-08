import Image from 'next/image';
import codingMayImage from '../../../public/git-qr-code.png';
import qrcodeImage from '../../../public/mail-qr-code.png';

export default function FollowMe() {
    return <>
        <h2 className="text-2xl font-semibold mt-6 mb-4">Liên Hệ</h2>
        <p>Trước đây, có một số bạn đã cho biết rằng dự án này rất hữu ích đối với họ, và họ muốn bày tỏ lòng biết ơn!</p>
        <p className="mt-5">
            Tại đây tôi xin tuyên bố, dự án này chỉ là phiên bản dịch tiếng Việt, hoàn toàn là "làm vì tình yêu", bản quyền vẫn thuộc về tài liệu hướng dẫn chính thức của Next.js. Dự án dịch này không có bất kỳ hoạt động thương mại nào và cũng không nhận bất kỳ khoản quyên góp nào. 
            Nếu bạn thấy thật sự hữu ích, hãy nhấn nút Star và theo dõi tài khoản “Github” để nhận thêm nhiều thông tin.
        </p>

        <div className="flex mt-5">
            <div className="w-1/2 items-center flex flex-col pr-2">
                <Image
                    src={codingMayImage}
                    className="mb-4 rounded-md shadow-lg"
                    alt=""
                    width={200}
                    height={200}
                />
                <p className="nx-text-xs font-bold text-center">Repositories「<b>Github</b>」</p>
            </div>
            <div className="w-1/2 items-center flex flex-col pl-2">
                <Image
                    src={qrcodeImage}
                    className="mb-5 rounded-md shadow-lg"
                    alt=""
                    width={200}
                    height={200}
                />
                <p className="nx-text-xs font-bold text-center">Theo dõi qua email「<b>Gmail</b>」</p>
            </div>
        </div>
    </>
}
