/* =====================================================
   SCRUB MATE — USER HELP & SUPPORT CHAT
===================================================== */

(function(){

  const supportPopup =
    document.getElementById("scrubSupportPopup");

  const supportBackButton =
    document.getElementById("scrubSupportBackButton");

  const supportChatArea =
    document.getElementById("scrubSupportChatArea");

  const supportLoading =
    document.getElementById("scrubSupportLoading");

  const supportOptionsArea =
    document.getElementById("scrubSupportOptionsArea");

  const supportOrdersArea =
    document.getElementById("scrubSupportOrdersArea");

  const supportOrdersList =
    document.getElementById("scrubSupportOrdersList");

  const closeOrdersButton =
    document.getElementById("scrubSupportCloseOrdersButton");

  const supportMessageInput =
    document.getElementById("scrubSupportMessageInput");

  const supportSendButton =
    document.getElementById("scrubSupportSendButton");

  const supportOnlineText =
    document.getElementById("scrubSupportOnlineText");

  const supportSolvedBanner =
    document.getElementById("scrubSupportSolvedBanner");


  let currentSupportId = null;
  let currentSupportRow = null;

  let currentIssueType = null;
  let selectedOrder = null;

  let supportRealtimeChannel = null;
  let messageSending = false;


  const issueOptions = [
    {
      id:"order_issue",
      label:"Order Issue",
      icon:"fa-solid fa-box"
    },
    {
      id:"payment_issue",
      label:"Payment Issue",
      icon:"fa-solid fa-indian-rupee-sign"
    },
    {
      id:"staff_issue",
      label:"Staff Issue",
      icon:"fa-solid fa-user"
    },
    {
      id:"other_issue",
      label:"Other Issue",
      icon:"fa-solid fa-circle-question"
    }
  ];


  /* =====================================================
     GET LOGGED-IN USER
  ===================================================== */

  function getScrubSupportUser(){

    const storageKeys = [
      "scrubMateUser",
      "scrubUser",
      "cezooUser"
    ];

    for(const key of storageKeys){

      try{

        const value =
          localStorage.getItem(key);

        if(!value){
          continue;
        }

        const parsed =
          JSON.parse(value);

        const mobile =
          parsed.mobile ||
          parsed.phone ||
          parsed.mobile_number ||
          parsed.user_mobile ||
          "";

        const name =
          parsed.name ||
          parsed.user_name ||
          parsed.full_name ||
          "Scrub Mate User";

        const userId =
          parsed.uid ||
          parsed.id ||
          parsed.user_id ||
          null;

        if(mobile){

          return {
            userId:String(userId || ""),
            name:String(name),
            mobile:String(mobile)
              .replace(/\D/g,"")
              .slice(-10)
          };

        }

      }catch(error){

        console.warn(
          "Unable to read user from:",
          key,
          error
        );

      }

    }


    const mobile =
      localStorage.getItem("scrubMateMobile") ||
      localStorage.getItem("userMobile") ||
      "";

    const name =
      localStorage.getItem("scrubMateName") ||
      localStorage.getItem("userName") ||
      "Scrub Mate User";

    const userId =
      localStorage.getItem("scrubMateUserId") ||
      "";


    return {
      userId:String(userId),
      name:String(name),
      mobile:String(mobile)
        .replace(/\D/g,"")
        .slice(-10)
    };

  }


  /* =====================================================
     FORMAT TIME
  ===================================================== */

  function formatSupportTime(value){

    if(!value){
      return "";
    }

    const date =
      new Date(value);

    if(Number.isNaN(date.getTime())){
      return "";
    }

    return date.toLocaleTimeString(
      "en-IN",
      {
        hour:"2-digit",
        minute:"2-digit",
        hour12:true
      }
    );

  }


  /* =====================================================
     FORMAT ORDER DATE
  ===================================================== */

  function formatSupportDate(value){

    if(!value){
      return "";
    }

    const date =
      new Date(value);

    if(Number.isNaN(date.getTime())){
      return "";
    }

    return date.toLocaleDateString(
      "en-IN",
      {
        day:"numeric",
        month:"short",
        year:"numeric"
      }
    );

  }


  /* =====================================================
     ESCAPE HTML
  ===================================================== */

  function escapeSupportHTML(value){

    return String(value ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;")
      .replace(/'/g,"&#039;");

  }


  /* =====================================================
     CREATE MESSAGE OBJECT
  ===================================================== */

  function createSupportMessage(
    sender,
    message,
    extra = {}
  ){

    return {
      id:
        crypto.randomUUID
          ? crypto.randomUUID()
          : (
              Date.now() +
              "-" +
              Math.random()
                .toString(16)
                .slice(2)
            ),

      sender:sender,

      message:String(message),

      created_at:
        new Date().toISOString(),

      read:false,

      ...extra
    };

  }


  /* =====================================================
     DEFAULT HELPER GREETING
  ===================================================== */

  function getInitialSupportChats(){

    return [
      createSupportMessage(
        "support",
        "Hello 👋 How can we help you?"
      ),

      createSupportMessage(
        "support",
        "Choose an issue below to continue."
      )
    ];

  }


  /* =====================================================
     OPEN SUPPORT POPUP
  ===================================================== */

  async function openScrubSupport(){

  console.log("Help button clicked");

  const popup =
    document.getElementById("scrubSupportPopup");

  if(!popup){

    console.error(
      "scrubSupportPopup HTML not found"
    );

    return;
  }


  /*
    Move popup directly inside body.

    This prevents position:fixed from being trapped
    inside any transformed or overflow-hidden parent.
  */

  if(popup.parentElement !== document.body){

    document.body.appendChild(popup);

  }


  popup.style.removeProperty("display");

  popup.classList.add("show");

  popup.setAttribute(
    "aria-hidden",
    "false"
  );


  document.documentElement.style.overflow =
    "hidden";

  document.body.style.overflow =
    "hidden";


  console.log(
    "Support popup classes:",
    popup.className
  );


  try{

    resetSupportScreen();

    await initialiseSupportChat();

  }catch(error){

    console.error(
      "Support chat loading error:",
      error
    );

  }

}
  /* =====================================================
     CLOSE SUPPORT POPUP
  ===================================================== */

  function closeScrubSupport(){

  const popup =
    document.getElementById("scrubSupportPopup");

  if(!popup){
    return;
  }


  popup.classList.remove("show");

  popup.setAttribute(
    "aria-hidden",
    "true"
  );


  document.documentElement.style.overflow =
    "";

  document.body.style.overflow =
    "";


  hideSupportOrders();

}
  window.openScrubSupport =
    openScrubSupport;

  window.closeScrubSupport =
    closeScrubSupport;


  /* =====================================================
     RESET SCREEN
  ===================================================== */

  function resetSupportScreen(){

    currentIssueType = null;
    selectedOrder = null;

    supportChatArea.innerHTML = "";

    supportLoading.hidden = false;

    supportOptionsArea.innerHTML = "";

    hideSupportOrders();

    disableSupportInput(
      "Select an issue first"
    );

    supportSolvedBanner.hidden = true;

    supportOnlineText.textContent =
      "Scrub Mate Helper";

  }


  /* =====================================================
     INITIALISE CHAT
  ===================================================== */

  async function initialiseSupportChat(){

    const user =
      getScrubSupportUser();

    if(!user.mobile){

      supportLoading.hidden = true;

      supportChatArea.innerHTML = `
        <div class="scrubSupportSystemNotice">
          Please login with your mobile number before contacting support.
        </div>
      `;

      return;

    }


    try{

      let supportRow =
        await getOpenSupportConversation(
          user.mobile
        );


      if(!supportRow){

        supportRow =
          await createSupportConversation(
            user
          );

      }


      currentSupportRow =
        supportRow;

      currentSupportId =
        supportRow.id;


      renderSupportConversation(
        supportRow
      );


      subscribeToSupportRealtime(
        supportRow.id
      );


    }catch(error){

      console.error(
        "Support initialisation failed:",
        error
      );

      supportLoading.hidden = true;

      supportChatArea.innerHTML = `
        <div class="scrubSupportSystemNotice">
          Unable to open support chat. Please check your internet connection and try again.
        </div>
      `;

    }

  }


  /* =====================================================
     GET EXISTING UNSOLVED CONVERSATION
  ===================================================== */

  async function getOpenSupportConversation(
    mobile
  ){

    const {
      data,
      error
    } = await supabaseClient
      .from("scrubmate_help_support")
      .select("*")
      .eq("user_mobile",mobile)
      .eq("status","not_solved")
      .order("updated_at",{
        ascending:false
      })
      .limit(1)
      .maybeSingle();


    if(error){
      throw error;
    }


    return data || null;

  }


  /* =====================================================
     CREATE SUPPORT CONVERSATION
  ===================================================== */

  async function createSupportConversation(
    user
  ){

    const initialChats =
      getInitialSupportChats();


    const {
      data,
      error
    } = await supabaseClient
      .from("scrubmate_help_support")
      .insert({
        user_id:
          user.userId || null,

        user_name:
          user.name,

        user_mobile:
          user.mobile,

        order_list:[],

        chats:
          initialChats,

        status:
          "not_solved",

        last_message:
          initialChats[
            initialChats.length - 1
          ].message,

        last_message_sender:
          "support",

        admin_unread_count:0,

        user_unread_count:0
      })
      .select("*")
      .single();


    if(error){
      throw error;
    }


    return data;

  }


  /* =====================================================
     RENDER FULL CONVERSATION
  ===================================================== */

  function renderSupportConversation(row){

    supportLoading.hidden = true;

    supportChatArea.innerHTML = "";


    const chats =
      Array.isArray(row.chats)
        ? row.chats
        : [];


    chats.forEach(message => {

      supportChatArea.insertAdjacentHTML(
        "beforeend",
        createMessageHTML(message)
      );

    });


    if(row.status === "solved"){

      supportSolvedBanner.hidden = false;

      supportOptionsArea.innerHTML = "";

      disableSupportInput(
        "This request has been solved"
      );

      supportOnlineText.textContent =
        "Request solved";

    }else{

      supportSolvedBanner.hidden = true;

      restoreSupportConversationState(
        chats
      );

    }


    scrollSupportToBottom(false);

  }


  /* =====================================================
     CREATE MESSAGE HTML
  ===================================================== */

  function createMessageHTML(message){

    const sender =
      message.sender || "support";

    const text =
      escapeSupportHTML(
        message.message || ""
      );

    const time =
      formatSupportTime(
        message.created_at
      );


    if(sender === "system_notice"){

      return `
        <div class="scrubSupportSystemNotice">
          ${text}
        </div>
      `;

    }


    const safeSender =
      [
        "user",
        "support",
        "system"
      ].includes(sender)
        ? sender
        : "support";


    const senderName = "";


    const readIcon =
      safeSender === "user"
        ? `<i class="fa-solid fa-check-double"></i>`
        : "";


    const avatarHTML =
      safeSender === "user"
        ? ""
        : `
            <div class="scrubSupportMessageAvatar">
              <i class="fa-solid fa-headset"></i>
            </div>
          `;

    return `
      <div class="scrubSupportMessageRow ${safeSender}">

        ${avatarHTML}

        <div class="scrubSupportMessageBubble">

          ${senderName}

          <p class="scrubSupportMessageText">
            ${text}
          </p>

          <div class="scrubSupportMessageMeta">
            <span>${time}</span>
            ${readIcon}
          </div>

        </div>

      </div>
    `;

  }


  /* =====================================================
     RESTORE OPTIONS / INPUT STATE
  ===================================================== */

  function restoreSupportConversationState(
    chats
  ){

    const selectedIssueMessage =
      [...chats]
        .reverse()
        .find(message =>
          message.issue_type
        );


    const selectedOrderMessage =
      [...chats]
        .reverse()
        .find(message =>
          message.selected_order
        );


    if(selectedIssueMessage){

      currentIssueType =
        selectedIssueMessage.issue_type;

    }


    if(selectedOrderMessage){

      selectedOrder =
        selectedOrderMessage.selected_order;

    }


    if(!currentIssueType){

      renderIssueOptions();

      disableSupportInput(
        "Select an issue first"
      );

      return;

    }


    supportOptionsArea.innerHTML = "";


    if(
      currentIssueType === "order_issue" &&
      !selectedOrder
    ){

      enableSupportInput(
        "Describe your order issue"
      );

      return;

    }


    enableSupportInput(
      "Type a message"
    );

  }


  /* =====================================================
     RENDER ISSUE OPTIONS
  ===================================================== */

  function renderIssueOptions(){

    supportOptionsArea.innerHTML =
      issueOptions
        .map(option => `
          <button
            type="button"
            class="scrubSupportIssueOption"
            data-support-issue="${option.id}"
          >
            <i class="${option.icon}"></i>
            <span>${option.label}</span>
          </button>
        `)
        .join("");

  }


  /* =====================================================
     HANDLE ISSUE SELECTION
  ===================================================== */

  async function selectSupportIssue(
    issueType
  ){

    if(
      !currentSupportId ||
      currentIssueType
    ){
      return;
    }


    const option =
      issueOptions.find(
        item => item.id === issueType
      );

    if(!option){
      return;
    }


    currentIssueType =
      issueType;


    supportOptionsArea
      .querySelectorAll(
        ".scrubSupportIssueOption"
      )
      .forEach(button => {

        button.disabled = true;

        button.classList.toggle(
          "selected",
          button.dataset.supportIssue ===
          issueType
        );

      });


    const userMessage =
      createSupportMessage(
        "user",
        option.label,
        {
          issue_type:issueType
        }
      );


    await appendSupportMessages([
      userMessage
    ]);


    if(issueType === "order_issue"){

      const helperMessage =
        createSupportMessage(
          "support",
          "Please select the order you need help with."
        );

      await appendSupportMessages([
        helperMessage
      ]);

      supportOptionsArea.innerHTML = "";

      await showUserOrders();

      return;

    }


    let replyText =
      "Please describe your issue. Our support team will reply shortly.";


    if(issueType === "payment_issue"){

      replyText =
        "Please tell us what happened with your payment. You can mention the amount, payment method and order number.";

    }else if(issueType === "staff_issue"){

      replyText =
        "Please describe the issue you faced with the cleaning staff. Our support team will check it.";

    }else if(issueType === "other_issue"){

      replyText =
        "Please type your question or issue below. Our support team will assist you.";

    }


    await appendSupportMessages([
      createSupportMessage(
        "support",
        replyText
      )
    ]);


    supportOptionsArea.innerHTML = "";

    enableSupportInput(
      "Type a message"
    );

    supportMessageInput.focus();

  }


  /* =====================================================
     LOAD USER ORDERS
  ===================================================== */

  async function loadUserOrders(){

    const user =
      getScrubSupportUser();


    /*
      Change these mobile column names if your order table
      uses a different mobile number column.
    */

    const mobileColumns = [
      "user_mobile",
      "mobile",
      "customer_mobile"
    ];


    for(const column of mobileColumns){

      const {
        data,
        error
      } = await supabaseClient
        .from("scrubmate_orders")
        .select("*")
        .eq(column,user.mobile)
        .order("created_at",{
          ascending:false
        })
        .limit(30);


      if(!error){

        return Array.isArray(data)
          ? data
          : [];

      }

    }


    console.warn(
      "Orders could not be loaded from scrubmate_orders."
    );


    return [];

  }


  /* =====================================================
     SHOW USER ORDERS
  ===================================================== */

  async function showUserOrders(){

    supportOrdersArea.hidden = false;

    supportOrdersList.innerHTML = `
      <div class="scrubSupportNoOrders">
        Loading your orders...
      </div>
    `;


    const orders =
      await loadUserOrders();


    if(!orders.length){

      supportOrdersList.innerHTML = `
        <div class="scrubSupportNoOrders">
          No orders found. You can close this box and describe your issue manually.
        </div>
      `;

      enableSupportInput(
        "Enter order number and issue"
      );

      return;

    }


    supportOrdersList.innerHTML =
      orders
        .map(order =>
          createSupportOrderHTML(order)
        )
        .join("");

  }


  /* =====================================================
     CREATE ORDER CARD HTML
  ===================================================== */

  function createSupportOrderHTML(order){

    const orderId =
      order.order_id ||
      order.id ||
      order.booking_id ||
      "Order";

    const serviceName =
      order.service_name ||
      order.service ||
      order.item_name ||
      order.booking_service ||
      getOrderItemsText(order.items) ||
      "Scrub Mate Service";

    const status =
      order.order_status ||
      order.status ||
      "placed";

    const amount =
      Number(
        order.total_amount ||
        order.amount ||
        order.to_pay ||
        order.total ||
        0
      );

    const createdAt =
      order.created_at ||
      order.order_date ||
      order.booking_date ||
      "";

    const orderData = {
      order_id:String(orderId),
      service_name:String(serviceName),
      order_status:String(status),
      amount:amount,
      created_at:createdAt
    };


    return `
      <button
        type="button"
        class="scrubSupportOrderCard"
        data-support-order="${encodeURIComponent(
          JSON.stringify(orderData)
        )}"
      >

        <div class="scrubSupportOrderTop">

          <span class="scrubSupportOrderId">
            #${escapeSupportHTML(orderId)}
          </span>

          <span class="scrubSupportOrderStatus">
            ${escapeSupportHTML(
              String(status).replace(/_/g," ")
            )}
          </span>

        </div>

        <div class="scrubSupportOrderService">
          ${escapeSupportHTML(serviceName)}
        </div>

        <div class="scrubSupportOrderBottom">

          <span>
            ${escapeSupportHTML(
              formatSupportDate(createdAt)
            )}
          </span>

          <span class="scrubSupportOrderAmount">
            ₹${amount.toLocaleString("en-IN")}
          </span>

        </div>

      </button>
    `;

  }


  function getOrderItemsText(items){

    if(!Array.isArray(items)){
      return "";
    }

    return items
      .slice(0,2)
      .map(item =>
        item.name ||
        item.service_name ||
        item.title ||
        ""
      )
      .filter(Boolean)
      .join(", ");

  }


  /* =====================================================
     SELECT ORDER
  ===================================================== */

  async function selectSupportOrder(
    encodedOrder
  ){

    let order;

    try{

      order =
        JSON.parse(
          decodeURIComponent(encodedOrder)
        );

    }catch(error){

      console.error(
        "Invalid selected order:",
        error
      );

      return;

    }


    selectedOrder =
      order;


    hideSupportOrders();


    const userOrderMessage =
      createSupportMessage(
        "user",
        [
          `Order: #${order.order_id}`,
          order.service_name,
          `Status: ${String(
            order.order_status
          ).replace(/_/g," ")}`,
          `Amount: ₹${Number(
            order.amount || 0
          ).toLocaleString("en-IN")}`
        ].join("\n"),
        {
          selected_order:order
        }
      );


    await appendSupportMessages([
      userOrderMessage
    ]);


    await updateSupportOrderList(order);


    await appendSupportMessages([
      createSupportMessage(
        "support",
        "Thank you. Please describe the issue you are facing with this order."
      )
    ]);


    enableSupportInput(
      "Describe your order issue"
    );

    supportMessageInput.focus();

  }


  /* =====================================================
     UPDATE ORDER LIST JSON
  ===================================================== */

  async function updateSupportOrderList(
    order
  ){

    const currentOrders =
      Array.isArray(
        currentSupportRow?.order_list
      )
        ? currentSupportRow.order_list
        : [];


    const alreadyExists =
      currentOrders.some(item =>
        String(item.order_id) ===
        String(order.order_id)
      );


    const nextOrders =
      alreadyExists
        ? currentOrders
        : [
            ...currentOrders,
            order
          ];


    const {
      data,
      error
    } = await supabaseClient
      .from("scrubmate_help_support")
      .update({
        order_list:nextOrders
      })
      .eq("id",currentSupportId)
      .select("*")
      .single();


    if(error){

      console.error(
        "Order list update failed:",
        error
      );

      return;

    }


    currentSupportRow =
      data;

  }


  /* =====================================================
     APPEND MESSAGES TO JSON CHAT
  ===================================================== */

  async function appendSupportMessages(
    newMessages
  ){

    if(
      !currentSupportId ||
      !Array.isArray(newMessages) ||
      !newMessages.length
    ){
      return;
    }


    const {
      data:latestRow,
      error:loadError
    } = await supabaseClient
      .from("scrubmate_help_support")
      .select("*")
      .eq("id",currentSupportId)
      .single();


    if(loadError){
      throw loadError;
    }


    const oldChats =
      Array.isArray(latestRow.chats)
        ? latestRow.chats
        : [];


    const existingIds =
      new Set(
        oldChats.map(message =>
          message.id
        )
      );


    const safeNewMessages =
      newMessages.filter(message =>
        !existingIds.has(message.id)
      );


    const updatedChats = [
      ...oldChats,
      ...safeNewMessages
    ];


    const lastMessage =
      updatedChats[
        updatedChats.length - 1
      ];


    const adminUnreadIncrease =
      safeNewMessages.filter(message =>
        message.sender === "user"
      ).length;


    const userUnreadIncrease =
      safeNewMessages.filter(message =>
        message.sender === "support" ||
        message.sender === "system"
      ).length;


    const {
      data,
      error
    } = await supabaseClient
      .from("scrubmate_help_support")
      .update({
        chats:updatedChats,

        last_message:
          lastMessage?.message || null,

        last_message_sender:
          lastMessage?.sender || null,

        admin_unread_count:
          Number(
            latestRow.admin_unread_count || 0
          ) + adminUnreadIncrease,

        user_unread_count:
          Number(
            latestRow.user_unread_count || 0
          ) + userUnreadIncrease,

        status:"not_solved"
      })
      .eq("id",currentSupportId)
      .select("*")
      .single();


    if(error){
      throw error;
    }


    currentSupportRow =
      data;


    renderSupportConversation(
      data
    );

  }


  /* =====================================================
     SEND USER MESSAGE
  ===================================================== */

  async function sendSupportMessage(){

    if(
      messageSending ||
      !currentSupportId ||
      !currentIssueType
    ){
      return;
    }


    const text =
      supportMessageInput.value.trim();


    if(!text){
      return;
    }


    messageSending = true;

    supportSendButton.disabled = true;


    supportMessageInput.value = "";

    resizeSupportTextarea();


    try{

      await appendSupportMessages([
        createSupportMessage(
          "user",
          text,
          {
            issue_type:
              currentIssueType,

            selected_order:
              selectedOrder || null
          }
        )
      ]);


      enableSupportInput(
        "Type a message"
      );


    }catch(error){

      console.error(
        "Message send failed:",
        error
      );

      supportMessageInput.value =
        text;

      alert(
        "Message was not sent. Please check your internet connection."
      );

    }finally{

      messageSending = false;

      updateSupportSendButton();

      supportMessageInput.focus();

    }

  }


  /* =====================================================
     REALTIME SUPPORT REPLIES
  ===================================================== */

  function subscribeToSupportRealtime(
    supportId
  ){

    if(supportRealtimeChannel){

      supabaseClient.removeChannel(
        supportRealtimeChannel
      );

      supportRealtimeChannel = null;

    }


    supportRealtimeChannel =
      supabaseClient
        .channel(
          `scrub-support-${supportId}`
        )
        .on(
          "postgres_changes",
          {
            event:"UPDATE",
            schema:"public",
            table:"scrubmate_help_support",
            filter:`id=eq.${supportId}`
          },
          payload => {

            const updatedRow =
              payload.new;

            currentSupportRow =
              updatedRow;


            renderSupportConversation(
              updatedRow
            );


            markSupportMessagesRead();

          }
        )
        .subscribe();

  }


  /* =====================================================
     MARK USER MESSAGES AS READ
  ===================================================== */

  async function markSupportMessagesRead(){

    if(
      !currentSupportId ||
      !currentSupportRow
    ){
      return;
    }


    if(
      Number(
        currentSupportRow.user_unread_count || 0
      ) === 0
    ){
      return;
    }


    await supabaseClient
      .from("scrubmate_help_support")
      .update({
        user_unread_count:0
      })
      .eq("id",currentSupportId);

  }


  /* =====================================================
     INPUT ENABLE / DISABLE
  ===================================================== */

  function enableSupportInput(
    placeholder = "Type a message"
  ){

    supportMessageInput.disabled = false;

    supportMessageInput.placeholder =
      placeholder;

    updateSupportSendButton();

  }


  function disableSupportInput(
    placeholder = "Select an issue first"
  ){

    supportMessageInput.disabled = true;

    supportMessageInput.value = "";

    supportMessageInput.placeholder =
      placeholder;

    supportSendButton.disabled = true;

  }


  function updateSupportSendButton(){

    supportSendButton.disabled =
      supportMessageInput.disabled ||
      !supportMessageInput.value.trim() ||
      messageSending;

  }


  /* =====================================================
     AUTO-GROW TEXTAREA
  ===================================================== */

  function resizeSupportTextarea(){

    supportMessageInput.style.height =
      "auto";

    supportMessageInput.style.height =
      Math.min(
        supportMessageInput.scrollHeight,
        110
      ) + "px";

  }


  /* =====================================================
     SCROLL TO BOTTOM
  ===================================================== */

  function scrollSupportToBottom(
    smooth = true
  ){

    requestAnimationFrame(() => {

      supportChatArea.scrollTo({
        top:
          supportChatArea.scrollHeight,

        behavior:
          smooth
            ? "smooth"
            : "auto"
      });

    });

  }


  /* =====================================================
     SHOW / HIDE ORDERS
  ===================================================== */

  function hideSupportOrders(){

    supportOrdersArea.hidden = true;

  }


  /* =====================================================
     CLICK EVENTS
  ===================================================== */

  document.addEventListener(
    "click",
    async function(event){

      const openButton =
        event.target.closest(
          "#scrubProfileHelpButton, #scrubHelpSupportButton"
        );


      if(openButton){

        event.preventDefault();

        openScrubSupport();

        return;

      }


      const issueButton =
        event.target.closest(
          "[data-support-issue]"
        );


      if(issueButton){

        await selectSupportIssue(
          issueButton.dataset.supportIssue
        );

        return;

      }


      const orderButton =
        event.target.closest(
          "[data-support-order]"
        );


      if(orderButton){

        await selectSupportOrder(
          orderButton.dataset.supportOrder
        );

      }

    }
  );


  supportBackButton
    ?.addEventListener(
      "click",
      closeScrubSupport
    );


  closeOrdersButton
    ?.addEventListener(
      "click",
      function(){

        hideSupportOrders();

        if(
          currentIssueType ===
          "order_issue"
        ){

          enableSupportInput(
            "Enter order number and issue"
          );

        }

      }
    );


  supportSendButton
    ?.addEventListener(
      "click",
      sendSupportMessage
    );


  supportMessageInput
    ?.addEventListener(
      "input",
      function(){

        resizeSupportTextarea();

        updateSupportSendButton();

      }
    );


  supportMessageInput
    ?.addEventListener(
      "keydown",
      function(event){

        if(
          event.key === "Enter" &&
          !event.shiftKey
        ){

          event.preventDefault();

          sendSupportMessage();

        }

      }
    );


  /* =====================================================
     ESCAPE KEY
  ===================================================== */

  document.addEventListener(
    "keydown",
    function(event){

      if(
        event.key === "Escape" &&
        supportPopup?.classList.contains(
          "show"
        )
      ){

        if(!supportOrdersArea.hidden){

          hideSupportOrders();

        }else{

          closeScrubSupport();

        }

      }

    }
  );


  /* =====================================================
     EDGE SWIPE BACK — BOTH SIDES
  ===================================================== */

  let swipeStartX = 0;
  let swipeStartY = 0;
  let swipeCurrentX = 0;
  let swipeCurrentY = 0;

  let swipeFromLeft = false;
  let swipeFromRight = false;
  let supportSwipeActive = false;

  const supportEdgeSize = 42;
  const supportCloseDistance = 85;


  supportPopup
    ?.addEventListener(
      "touchstart",
      function(event){

        if(
          !supportPopup.classList.contains(
            "show"
          ) ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeStartX =
          touch.clientX;

        swipeStartY =
          touch.clientY;

        swipeCurrentX =
          touch.clientX;

        swipeCurrentY =
          touch.clientY;


        swipeFromLeft =
          swipeStartX <= supportEdgeSize;


        swipeFromRight =
          swipeStartX >=
          window.innerWidth -
          supportEdgeSize;


        supportSwipeActive =
          swipeFromLeft ||
          swipeFromRight;

      },
      {
        passive:true
      }
    );


  supportPopup
    ?.addEventListener(
      "touchmove",
      function(event){

        if(
          !supportSwipeActive ||
          event.touches.length !== 1
        ){
          return;
        }


        const touch =
          event.touches[0];


        swipeCurrentX =
          touch.clientX;

        swipeCurrentY =
          touch.clientY;


        const moveX =
          swipeCurrentX -
          swipeStartX;

        const moveY =
          swipeCurrentY -
          swipeStartY;


        if(
          Math.abs(moveY) >
          Math.abs(moveX)
        ){

          supportSwipeActive = false;

          return;

        }


        const validDirection =
          (
            swipeFromLeft &&
            moveX > 0
          ) ||
          (
            swipeFromRight &&
            moveX < 0
          );


        if(validDirection){

          event.preventDefault();

        }

      },
      {
        passive:false
      }
    );


  supportPopup
    ?.addEventListener(
      "touchend",
      function(){

        if(!supportSwipeActive){
          return;
        }


        const moveX =
          swipeCurrentX -
          swipeStartX;

        const moveY =
          swipeCurrentY -
          swipeStartY;


        const validLeft =
          swipeFromLeft &&
          moveX >= supportCloseDistance;


        const validRight =
          swipeFromRight &&
          moveX <= -supportCloseDistance;


        if(
          Math.abs(moveX) >
          Math.abs(moveY) &&
          (
            validLeft ||
            validRight
          )
        ){

          if(!supportOrdersArea.hidden){

            hideSupportOrders();

          }else{

            closeScrubSupport();

          }

        }


        supportSwipeActive = false;
        swipeFromLeft = false;
        swipeFromRight = false;

      },
      {
        passive:true
      }
    );

})();
