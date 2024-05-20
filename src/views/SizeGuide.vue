<template>
    <div class="h-full bg-white flex flex-col lg:flex-row items-center justify-center gap-[50px] p-5 lg:py-10 sm:p-20">
        <div class="flex flex-col gap-[50px]">
            <div class="text">
                <h1 class="font-black text-xl sm:text-3xl lg:text-6xl text-black">SIZE GUIDE</h1>
                <p class="text-black text-base sm:text-xl lg:text-2xl">Measure your body as described below, then choose the right size for you.
                </p>
            </div>
            <div class="p-[10px] sm:p-[30px] border-[#76999A] border">
                <table class="table-auto w-full sm:border-spacing-[43px]">
                    <thead>
                        <tr>
                            <th class="text-start p-[10px] sm:p-[15px] font-bold text-black text-xs sm:text-base">Size<span style="box-shadow: 5px 5px 0px 0px #000;" class="ml-2 sm:ml-5 p-1 sm:p-2 bg-[#9FEA1C] border-[0.5px] border-black">CM</span></th>
                            <th class="font-bold text-black text-xs sm:text-base">S</th>
                            <th class="font-bold text-black text-xs sm:text-base">M</th>
                            <th class="font-bold text-black text-xs sm:text-base">L</th>
                            <th class="font-bold text-black text-xs sm:text-base">XL</th>
                            <th class="font-bold text-black text-xs sm:text-base">XXL</th>
                            <th class="font-bold text-black text-xs sm:text-base">XXL</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="p-[7px] sm:p-[15px] font-bold text-black text-xs sm:text-base"><span class="mr-2 sm:mr-5 text-center text-white inline-block w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] bg-black">1</span>BODY LENGTH</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">68</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">70</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">72</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">74</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">76</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">78</td>
                        </tr>
                        <tr>
                            <td class="p-[7px] sm:p-[15px] font-bold text-black text-xs sm:text-base ml-2"><span class="mr-2 sm:mr-5 text-center text-white inline-block w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] bg-black">2</span>CHEST WIDTH</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">54</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">56</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">58</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">60</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">62</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">64</td>
                        </tr>
                        <tr>
                            <td class="p-[7px] sm:p-[15px] font-bold text-black text-xs sm:text-base ml-2"><span class="mr-2 sm:mr-5 text-center text-white inline-block w-[15px] h-[15px] sm:w-[25px] sm:h-[25px] bg-black">3</span>SLEEVE LENGTH</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">58</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">60</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">62</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">64</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">68</td>
                            <td class="text-center font-bold text-black text-xs sm:text-base">66</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="w-[50%] sm:w-fit">
            <img class="object-cover" src="/src/assets/images/size-guide.png" alt="">
        </div>
    </div>
</template>