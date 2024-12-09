import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { name, email } = data;

    // TODO: 这里可以添加数据库操作
    console.log('收到的数据:', { name, email });

    // 模拟API延迟
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ 
      success: true, 
      message: '提交成功' 
    });
  } catch (error) {
    console.error('Trial submission error:', error);
    return NextResponse.json(
      { success: false, message: '提交失败，请稍后重试' },
      { status: 500 }
    );
  }
}